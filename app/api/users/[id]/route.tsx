import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";
import { use } from "react";
export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // fetch the data from db
  // if not  found, return 404 error
  // else return data
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  // validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if (!body.name)
  //   return NextResponse.json({ error: "name is required" }, { status: 400 });
  // if invalid , return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
