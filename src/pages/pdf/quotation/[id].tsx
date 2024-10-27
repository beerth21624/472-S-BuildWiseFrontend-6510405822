import { Badge, Divider, Table } from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconPhoneCall,
  IconRecordMail,
} from "@tabler/icons-react";
import { format, addMonths } from "date-fns";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function Quotation(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  // const
  return (
    <div className="a4-vertical flex flex-col p-5 text-[14px]">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="mb-1 font-semibold">ผู้ทำใบเสนอราคา</h2>
            <p>บริษัท เทสล่า มอเตอร์ (ประเทศไทย) จำกัด</p>
            <p>123 ถนนเจริญกรุง ทุ่งมหาเมฆ สาทร กรุงเทพมหานคร 10120</p>
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <IconPhone size={15} />
                <div>0234567891</div>
              </div>
              <div className="flex items-center gap-1">
                <IconMail size={15} />
                <div>contact234@pattana.co.th</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <h1 className="mb-4 text-2xl font-bold">ใบเสนอราคา</h1>
            <div>
              <div>
                <span className="font-semibold">Quotation No:</span>{" "}
                QO-2024010014
              </div>
              <div>
                <span className="font-semibold">Issued Date:</span>{" "}
                {format(new Date(), "dd-MMM-yyyy")}
              </div>
              <div>
                <span className="font-semibold">Valid Date:</span>{" "}
                {format(addMonths(new Date(), 1), "dd-MMM-yyyy")}
              </div>
            </div>
          </div>
        </div>
        <Divider my={10} />
        {/* Customer Info */}
        <div className="mb-8">
          <h2 className="mb-1 font-semibold">ลูกค้า</h2>
          <p>บริษัท พัฒนาคอนโด จำกัด (มหาชน)</p>
          <p>123 ถนนเจริญกรุง ทุ่งมหาเมฆ สาทร กรุงเทพมหานคร 10120</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <IconPhone size={15} />
              <div>0234567891</div>
            </div>
            <div className="flex items-center gap-1">
              <IconMail size={15} />
              <div>contact234@pattana.co.th</div>
            </div>
          </div>
        </div>
        {/* Product Table */}
        <table className="mb-8 w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ชื่องาน</th>
              <th className="px-4 py-2 text-center">หน่วย</th>
              <th className="px-4 py-2 text-center">จำนวน</th>
              <th className="px-4 py-2 text-right">ราคาต่อหน่วย</th>
              <th className="px-4 py-2 text-right">รวม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <p className="font-semibold">งานผนัง</p>
              </td>
              <td className="px-4 py-2 text-center">
                <Badge variant="light">ตร.ม.</Badge>
              </td>
              <td className="px-4 py-2 text-center">5.00</td>
              <td className="px-4 py-2 text-right">20,000.00</td>
              <td className="px-4 py-2 text-right">100,000.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <p className="font-semibold">งานประตู-หน้าต่าง</p>
              </td>
              <td className="px-4 py-2 text-center">
                <Badge variant="light">ตร.ม.</Badge>
              </td>
              <td className="px-4 py-2 text-center">5.00</td>
              <td className="px-4 py-2 text-right">20,000.00</td>
              <td className="px-4 py-2 text-right">100,000.00</td>
            </tr>
          </tbody>
        </table>
        <Divider my={10} />
        {/* Summary */}
        <div className="mb-8 flex justify-end">
          <div className="w-64">
            <div className="flex justify-between">
              <span>ราคารวม</span>
              <span>200,000.00 บาท</span>
            </div>
            <div className="flex justify-between">
              <span>ภาษี</span>
              <span>7 %</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>ราคาสุทธิ</span>
              <span>205,000.00 บาท</span>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="flex items-baseline justify-between">
          <div className="text-center">
            <div className="mx-auto mb-2 w-48 border-b border-black" />
            <p>(................................................)</p>
            <p>ผู้รับเหมา</p>
            <p className="mt-2 font-semibold">Approved By</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 w-48 border-b border-black" />
            <p>(................................................)</p>
            <p>ลูกค้า</p>
            <p className="mt-2 font-semibold">Accepted By</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      id: context.query.id?.toString(),
    },
  };
}
