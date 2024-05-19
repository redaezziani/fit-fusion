'use server';
import secrets, { secret } from "@/(db)/secrets";
import db from "@/(db)/secrets";
import { ActionType, NotificationType } from "@prisma/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const tokenSecret = new TextEncoder().encode(secret.jwt_secret);
export interface Notification {
    title : string
    message : string
    type : NotificationType
    action : ActionType
    userId : string
}

export const CreateNotification = async (data: Notification) => {
  try {
    const res = await db.notification.create({
        data
    });
    if (!res) {
      throw new Error("Failed to create notification");
    }
    return res;
  } catch (error) {
    console.error(error);
  }
}




export const verifyToken = async () => {
  const token = cookies().get("token")?.value;
  if (!token) {
      return null;
  }
  try {
      const { payload } = await jwtVerify(token, tokenSecret);
      return payload;
  } catch (error) {
      return null;
  }
}



