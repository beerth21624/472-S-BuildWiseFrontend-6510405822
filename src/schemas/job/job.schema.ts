import { z } from "zod";

export const jobSchema = z.object({
  name: z
    .string({ required_error: "กรุณากรอกชื่องาน" })
    .min(1, "กรุณากรอกชื่องาน"),
  description: z
    .string({ required_error: "กรุณากรอกรายละเอียด" })
    .min(1, "กรุณากรอกรายละเอียด"),
  unit: z.string({ required_error: "กรุณากรอกหน่วยของงาน" }),
  material: z.array(
    z.object({
      material_id: z.string({ required_error: "กรุณาเลือกวัสดุ" }),
    }), 
  ),
});

export type JobSchemaType = z.infer<typeof jobSchema>;
