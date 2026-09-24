import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("Asmual-AquaNature");

    let userDoc = await db.collection("user").findOne({ id: session.user.id });
    if (!userDoc && ObjectId.isValid(session.user.id)) {
      userDoc = await db.collection("user").findOne({ _id: new ObjectId(session.user.id) });
    }

    const sessionUserData = session.user as Record<string, unknown>;

    return NextResponse.json({
      user: {
        id: session.user.id,
        name: userDoc?.name ?? session.user.name ?? "",
        email: userDoc?.email ?? session.user.email ?? "",
        image: userDoc?.image ?? session.user.image ?? "/images/default-avatar.svg",
        phoneNumber: userDoc?.phoneNumber ?? sessionUserData?.phoneNumber ?? "",
        gender: userDoc?.gender ?? sessionUserData?.gender ?? "",
        location: userDoc?.location ?? sessionUserData?.location ?? "",
        role: userDoc?.role ?? sessionUserData?.role ?? "user",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch profile";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, phoneNumber, gender, location, image } = body;

    const updateFields: Record<string, unknown> = {
      updatedAt: new Date(),
    };

    if (typeof name === "string") updateFields.name = name.trim();
    if (typeof phoneNumber === "string") updateFields.phoneNumber = phoneNumber.trim();
    if (typeof gender === "string") updateFields.gender = gender.trim();
    if (typeof location === "string") updateFields.location = location.trim();
    if (typeof image === "string" && image.trim()) updateFields.image = image.trim();

    const client = await clientPromise;
    const db = client.db("Asmual-AquaNature");

    const query = ObjectId.isValid(session.user.id)
      ? { $or: [{ id: session.user.id }, { _id: new ObjectId(session.user.id) }] }
      : { id: session.user.id };

    await db.collection("user").updateOne(query, { $set: updateFields });

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      updatedFields: updateFields,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update profile";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
