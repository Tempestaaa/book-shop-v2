import { z } from "zod/v4";

export const bookGenre = z.object({
  id: z.uuidv4(),
  name: z
    .string()
    .min(1, "Name cannot be empty")
    .max(255, "Character length limit exceeded"),
});
export type Genre = z.infer<typeof bookGenre>;

export const bookFormat = z.enum([
  "Hardcover",
  "Paperback",
  "EBook",
  "Audiobook",
]);
