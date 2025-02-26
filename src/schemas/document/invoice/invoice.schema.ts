import { z } from "zod";

export const invoiceSchema = z.object({
    paymentTerms: z.string({ required_error: "กรุณากรอกเงื่อนไขการชำระเงิน" }),
});

export const invoiceFormToApi = invoiceSchema.transform((data) => {
  return {};
});

export type InvoiceSchemaType = z.infer<typeof invoiceSchema>;
