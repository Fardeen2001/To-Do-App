import { ConnectionStr } from "@/Components/db";
import { MongoClient, ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  let result = [];
  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoListCollection = db.collection("todoList");
  result = await todoListCollection.find().toArray();
  client.close();

  return NextResponse.json(
    { result },
    {
      status: 201,
    }
  );
}

export async function POST(req) {
  const { title, description, status } = await req.json();
  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoCollection = db.collection("todoList");
  const newTodo = {
    title,
    description,
    status,
    _id: new ObjectId(),
  };
  await todoCollection.insertOne(newTodo);
  client.close();

  return NextResponse.json(newTodo, { status: 201 });
}
