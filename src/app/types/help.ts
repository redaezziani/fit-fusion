import { z } from "zod";

export interface ResErrType {
    status: string;
    message: string;
}


export const UserData = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  image: z.string().optional(),
});

export type UserDataType = z.infer<typeof UserData>;
