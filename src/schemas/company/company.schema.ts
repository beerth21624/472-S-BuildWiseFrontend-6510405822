import { z } from "zod";
import { addressSchema } from "../address.schema";

export const companySchema = z
  .object({
    name: z.string().min(1),
    email: z.string().min(1),
    tel: z.string().min(1),
    tax_id: z
      .string({ required_error: "กรุณากรอกเลขบัตรประชาชน" })
      .refine((value) => {
        return value.length === 13;
      }, "กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง"),
  })
  .merge(addressSchema);

export type CompanySchemaType = z.infer<typeof companySchema>;
