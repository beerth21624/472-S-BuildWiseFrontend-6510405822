import { z } from "zod";

export const projectSchema = z.object({
  project_name: z.string().min(1, { message: "Required" }),
  project_details: z.string().min(1, { message: "Required" }),
  project_start_date: z.date(),
  project_end_date: z.date(),
  contract_url: z.string().url(),
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;
