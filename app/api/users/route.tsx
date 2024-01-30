import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "../../../prisma/client";
//to prevent caching we use {request: NextRequest} object since request paramter is not used
export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  //fetch the data from db
  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate
  // if invalid, return 400
  // else return
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //   if (!body.name)
  //     return NextResponse.json({ error: "name is required" }, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (user)
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
