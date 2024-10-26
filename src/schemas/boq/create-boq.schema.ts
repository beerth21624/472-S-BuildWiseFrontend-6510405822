import { z } from "zod";
import { boqSchema } from "./boq.schema";

export const createBoqSchema = z.object({
  projectId: z.string({ required_error: "กรุณาเลือกโครงการ" }).optional(),
  boq: boqSchema,
});

export type CreateBoqSchemaType = z.infer<typeof createBoqSchema>;
