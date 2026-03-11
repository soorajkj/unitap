import z from "zod";

export const profileCreateSchema = z.object({
  title: z.string().min(1).max(100).trim(),
  bio: z.string().max(500).trim(),
  email: z.email().or(z.literal("")),
  phone: z
    .e164({ error: "Please enter a valid phone number" })
    .or(z.literal("")),
  website: z.url().or(z.literal("")),
  address: z.string().max(200).trim(),
});

export const profileUpdateSchema = profileCreateSchema;

export type ProfileCreateInput = z.infer<typeof profileCreateSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
