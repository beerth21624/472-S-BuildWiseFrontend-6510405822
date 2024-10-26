import { z } from "zod";

export const boqGeneralCostSchema = z.object({
  type_name: z.string(),
  name: z.string(),
  cost: z.number().min(0),
});

export type BoqGeneralCostSchemaType = z.infer<typeof boqGeneralCostSchema>;
