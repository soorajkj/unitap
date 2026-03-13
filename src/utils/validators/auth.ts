import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2).max(25).trim(),
  email: z.email().trim(),
  password: z.string().min(8).max(25).trim(),
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: z.string(),
  password: z.string().trim(),
});

export type SigniSchema = z.infer<typeof signinSchema>;
