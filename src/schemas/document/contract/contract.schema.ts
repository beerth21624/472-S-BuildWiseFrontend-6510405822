import { projectSchema } from "@/schemas/project/project.schema";
import { z } from "zod";

const periodSchema = z.object({
  amount_period: z
    .number({ required_error: "กรุณากรอกจำนวนเงิน" })
    .min(0, { message: "จำนวนเงินไม่ถูกต้อง" }),
  delivered_within: z
    .date({ required_error: "กรุณากรอกกำหนดวันส่งมอบ" })
    .nullable()
    .optional(),
  jobs: z
    .array(
      z.object({
        job_id: z.string(),
      }),
    )
    .nullable()
    .optional(),
});

export const contractSchema = z.object({
  area_size: z
    .number({ required_error: "กรุณากรอกขนาดพื้นที่" })
    .min(0, { message: "กรุณากรอกขนาดพื้นที่" }),
  attachments: z.array(
    z.object({
      value: z.string(),
    }),
    { required_error: "กรุณาเพิ่มรูปแบบและรายการแนบท้ายสัญญา" },
  ),
  first_period: periodSchema,
  periods: z.array(periodSchema),
  start_date: z.string({ required_error: "กรุณาระบุวันที่เริ่มต้นสัญญา" }),
  end_date: z.string({ required_error: "กรุณาระบุวันที่สิ้นสุดสัญญา" }),
  validate_within: z.number({ required_error: "กรุณาระบุระยะเวลาในการตรวจรับมอบงาน" }),
  pay_within: z.number({ required_error: "กรุณาระบุจำนวนวันในการชำระเงิน" }),
  retention_money: z.number({ required_error: "กรุณาระบุจำนวนเงินประกันผลงาน" }),
  guarantee_within: z.number({ required_error: "กรุณาระบุจำนวนวันในการรับประกันผลงาน" }),
  amendment: z.string({ required_error: "กรุณาระบุรายละเอียดงานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน" }),
  termination_of_contract: z.string({ required_error: "กรุณากรอกเหตุผลในการบอกเลิกสัญญา" }),
  end_of_contract: z.string({ required_error: "กรุณาระบุเงื่อนไขการสิ้นสุดสัญญา" }),
  breach_of_contract: z.string({ required_error: "กรุณาระบุเงื่อนไขและผลของการผิดสัญญา" }),
  force_majeure: z.string({ required_error: "กรุณาระบุเหตุการณ์ที่ถือเป็นเหตุสุดวิสัย" }),
})
// .merge(projectSchema.omit({ address: true, province: true, district: true, subdistrict: true, postal_code: true }));

export type ContractSchemaType = z.infer<typeof contractSchema>;
