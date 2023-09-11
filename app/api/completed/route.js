import { ConnectionStr } from "@/Components/db";
import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  let completed = [];
  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoListCollection = db.collection("completedtodoList");
  completed = await todoListCollection.find().toArray();
  client.close();

  return NextResponse.json(
    { completed },
    {
      status: 201,
    }
  );
}

export async function POST(req) {
  const { title, description } = await req.json();
  const client = await MongoClient.connect(ConnectionStr);
  const db = client.db();
  const todoCollection = db.collection("completedtodoList");
  await todoCollection.insertOne({ title, description });
  client.close();

  return NextResponse.json({ title, description }, { status: 201 });
}
