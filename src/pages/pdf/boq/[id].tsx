import { Text } from "@mantine/core";
import { format } from "date-fns";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function BoqReport(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="a4-horizontal flex flex-col p-5 text-[14px]">
      <div>
        {/* Header */}
        <div className="flex justify-between">
          <div className="px-2 py-1">
            <h1 className="text-xl font-bold">รายการประมาณราคา</h1>
            <h2 className="text-lg">(BILL OF QUANTITY)</h2>
          </div>
          <div className="px-2 py-1 text-right">
            <div>
              <span className="font-semibold">Issued Date:</span>{" "}
              {format(new Date(), "dd-MMM-yyyy")}
            </div>
            <div>be5e5e3a-618c-438c-94c4-aa1e3fe26c8a</div>
          </div>
        </div>
        {/* Project Info */}
        <div className="grid grid-cols-2 border-b p-4">
          <div>
            <p>
              <span className="font-semibold">โครงการ :</span>{" "}
              โครงการคอนโดมิเนียม ริเวอร์วิว เฟส 5
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">สถานที่ :</span> 123 ถนนเจริญกรุง,
              บางคอแหลม, กรุงเทพมหานคร, 10120
            </p>
          </div>
        </div>
        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">
                ลำดับ
                <br />
                ITEM
              </th>
              <th className="border px-2 py-1">
                รายละเอียด
                <br />
                DESCRIPTION
              </th>
              <th className="border px-2 py-1">
                ปริมาณ
                <br />
                QTY
              </th>
              <th className="border px-2 py-1">
                หน่วย
                <br />
                UNIT
              </th>
              <th className="border px-2 py-1">
                รวมค่าวัสดุ
                <br />
                MATERIAL
              </th>
              <th className="border px-2 py-1">
                รวมค่าแรง
                <br />
                LABOUR
              </th>
              <th className="border px-2 py-1">
                รวมค่าวัสดุ+รวมค่าแรง
                <br />
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE) 
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">
                งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">18,795.00</td>
              <td className="border px-2 py-1 text-right">34,946.90</td>
              <td className="border px-2 py-1 text-right">53,741.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">2</td>
              <td className="border px-2 py-1">งานโครงสร้าง (Construction)</td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">397,318.24</td>
              <td className="border px-2 py-1 text-right">183,748.50</td>
              <td className="border px-2 py-1 text-right">581,066.74</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">3</td>
              <td className="border px-2 py-1">
                งานสถาปัตยกรรม (Architecture)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">535,777.70</td>
              <td className="border px-2 py-1 text-right">174,903.20</td>
              <td className="border px-2 py-1 text-right">710,680.90</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">4</td>
              <td className="border px-2 py-1">
                งานระบบไฟฟ้า (Electrical system)
              </td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">54,100.00</td>
              <td className="border px-2 py-1 text-right">38,850.00</td>
              <td className="border px-2 py-1 text-right">92,950.00</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 text-center">5</td>
              <td className="border px-2 py-1">งานระบบสุขาภิบาล (Sanitary)</td>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1 text-center">หลัง</td>
              <td className="border px-2 py-1 text-right">40,480.00</td>
              <td className="border px-2 py-1 text-right">15,000.00</td>
              <td className="border px-2 py-1 text-right">55,480.00</td>
            </tr>
            <tr className="font-semibold">
              <td className="border px-2 py-1 text-right" colSpan={4}>
                รวมค่าวัสดุและค่าแรง
              </td>
              <td className="border px-2 py-1 text-right">1,046,470.94</td>
              <td className="border px-2 py-1 text-right">447,448.60</td>
              <td className="border px-2 py-1 text-right text-red-600">
                1,493,919.54
              </td>
            </tr>

            <tr className="font-bold">
              <td className="border px-2 py-1 text-right" colSpan={6}>
                รวมเป็นเงินทั้งสิ้น
              </td>
              <td className="border px-2 py-1 text-right text-red-600">
                1,718,007.47
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {...new Array(10).fill(0).map((_, index) => (
        <div key={index} className="page-break mt-5 flex flex-col">
          <Text fw={700} my={3}>
            {index + 1}. งานเตรียมพื้นที่และการเตรียมงาน (PREPARATION ON SITE)
          </Text>
          <table className="w-full" key={index}>
            <thead className="bg-gray-100">
              <tr>
                <th className="border" rowSpan={2}>
                  รายการ
                </th>
                <th className="border text-center" colSpan={2}>
                  ปริมาณวัสดุ
                </th>
                <th className="border text-center" colSpan={2}>
                  ค่าวัสดุ
                </th>
              </tr>
              <tr>
                <th className="border">จำนวนรวม</th>
                <th className="border">หน่วย</th>
                <th className="border">ต่อหน่วย</th>
                <th className="border">รวม</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">- ขุดดิน - ถมดิน</td>
                <td className="border px-2 py-1 text-right">51</td>
                <td className="border px-2 py-1">ลบ.ม.</td>
                <td className="border px-2 py-1 text-right">-</td>
                <td className="border px-2 py-1 text-right">-</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">- ทรายหยาบรองพื้น</td>
                <td className="border px-2 py-1 text-right">1.58</td>
                <td className="border px-2 py-1">ลบ.ม.</td>
                <td className="border px-2 py-1 text-right">450.00</td>
                <td className="border px-2 py-1 text-right">712.80</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">- คอนกรีตหยาบรองพื้น</td>
                <td className="border px-2 py-1 text-right">1.58</td>
                <td className="border px-2 py-1">ลบ.ม.</td>
                <td className="border px-2 py-1 text-right">1,200.00</td>
                <td className="border px-2 py-1 text-right">1,900.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
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
