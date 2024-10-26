import { z } from "zod";

export const boqSchema = z.array(
  z.object({
    jobId: z.string(),
    quantity: z.number().min(0),
    labor_cost: z.number().min(0),
  }),
);

export type BoqSchemaType = z.infer<typeof boqSchema>;
