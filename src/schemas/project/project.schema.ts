import { z } from "zod";
import { addressSchema } from "../address.schema";

export const projectSchema = z
  .object({
    project_name: z
      .string({ required_error: "กรุณากรอกชื่อโครงการ" })
      .min(1, "กรุณากรอกชื่อโครงการ"),
    project_details: z
      .string({ required_error: "กรุณากรอกรายละเอียดโครงการ" })
      .min(1, "กรุณากรอกรายละเอียดโครงการ"),
    // project_start_date: z.date({
    //   required_error: "กรุณาเลือกวันที่เริ่มต้น",
    //   invalid_type_error: "กรุณาเลือกวันที่เริ่มต้น",
    // }),
    // project_end_date: z.date({
    //   required_error: "กรุณาเลือกวันที่สิ้นสุด",
    //   invalid_type_error: "กรุณาเลือกวันที่สิ้นสุด",
    // }),
    // contract_url: z
    //   .string({ required_error: "กรุณากรอก URL สัญญา" })
    //   .url({ message: "ประเภท URL ไม่ถูกต้อง" }),
  })
  .merge(addressSchema);

export type ProjectSchemaType = z.infer<typeof projectSchema>;
