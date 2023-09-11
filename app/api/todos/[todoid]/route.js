import { ConnectionStr } from "@/Components/db";
import { MongoClient, ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req, content) {
  const id = content.params.todoid;
  const record = { _id: new ObjectId(id) || id };

  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoCollection = db.collection("todoList");

  try {
    const result = await todoCollection.deleteOne(record);
    if (result.deletedCount === 1) {
      client.close();
      return NextResponse.json(
        { result, success: true },
        { message: "item deleted" },
        { status: 200 }
      );
    } else {
      client.close();
      return NextResponse.json(
        { message: "item not deleted" },
        { status: 404 }
      );
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, content) {
  const id = content.params.todoid;
  const filter = { _id: new ObjectId(id) };
  const payload = await req.json();

  const update = { $set: payload };

  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoCollection = db.collection("todoList");

  try {
    const result = await todoCollection.updateOne(filter, update);

    if (result.matchedCount === 0) {
      client.close();
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    client.close();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    client.close();
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
