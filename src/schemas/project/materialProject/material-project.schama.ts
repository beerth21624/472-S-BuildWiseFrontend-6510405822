import { z } from "zod";

export const materialProjectSchema = z.object({
  name: z.string(),
  supplier_id: z.string(),
  material_id: z.string(),
  estimated_price: z.number().min(0).optional(),
  actual_price: z.number().min(0).optional(),
});

export type MaterialProjectSchemaType = z.infer<typeof materialProjectSchema>;
