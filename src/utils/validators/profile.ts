import z from "zod";

export const profileCreateSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/)
    .trim(),
  title: z.string().min(1).max(100).trim(),
});

export const profileUpdateSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/)
    .trim(),
  title: z.string().min(1).max(100).trim(),
  bio: z.string().max(500).trim(),
  email: z.email().or(z.literal("")),
  phone: z
    .e164({ error: "Please enter a valid phone number" })
    .or(z.literal("")),
  website: z.url().or(z.literal("")),
  address: z.string().max(200).trim(),
});

export type ProfileCreateSchema = z.infer<typeof profileCreateSchema>;

export type ProfileUpdateSchema = z.infer<typeof profileUpdateSchema>;
