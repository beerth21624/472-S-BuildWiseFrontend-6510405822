import { z } from "zod";

export const materialProjectActualSchema = z.object({
  name: z.string(),
  supplier_id: z.string(),
  material_id: z.string(),
  actual_price: z.number().min(0).optional(),
});

export type MaterialProjectActualSchemaType = z.infer<
  typeof materialProjectActualSchema
>;
