import useGetExportQuotationByProject from "@/hooks/queries/quotation/useGetExportQuotationByProject";
import useGetQuotationByProject from "@/hooks/queries/quotation/useGetQuotationByProject";
import { Badge, Divider, NumberFormatter, Table } from "@mantine/core";
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
  const getExportQuotationByProject = useGetExportQuotationByProject({
    project_id: props.id ?? "",
  });

  console.log(getExportQuotationByProject.data?.data);

  return (
    <div className="a4-vertical relative flex flex-col p-7 text-[14px]">
      <div>
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
            <h1 className="text-2xl font-bold">ใบเสนอราคา</h1>
            <div>{getExportQuotationByProject.data?.data.ProjectName}</div>
            <div>
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
        <div>
          <div className="mb-8">
            <h2 className="mb-1 font-semibold">ลูกค้า</h2>
            <p>{getExportQuotationByProject.data?.data.ClientName}</p>
            <p>
              {getExportQuotationByProject.data?.data.ClientAddress.address},{" "}
              {getExportQuotationByProject.data?.data.ClientAddress.subdistrict}
              , {getExportQuotationByProject.data?.data.ClientAddress.district},{" "}
              {getExportQuotationByProject.data?.data.ClientAddress.province},{" "}
              {getExportQuotationByProject.data?.data.ClientAddress.postal_code}
            </p>
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <IconPhone size={15} />
                <div>{getExportQuotationByProject.data?.data.ClientTel}</div>
              </div>
              <div className="flex items-center gap-1">
                <IconMail size={15} />
                <div>{getExportQuotationByProject.data?.data.ClientEmail}</div>
              </div>
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
            {getExportQuotationByProject.data?.data.JobDetails.map(
              (job, index) => (
                <tr key={index}>
                  <td className="px-4">
                    <p className="font-semibold">{job.Name}</p>
                  </td>
                  <td className="px-4 text-center">
                    <Badge variant="light">{job.Unit}</Badge>
                  </td>
                  <td className="px-4 text-center">
                    <NumberFormatter
                      value={job.Amount.Float64.toFixed(2)}
                      thousandSeparator
                    />
                  </td>
                  <td className="px-4 text-right">
                    <NumberFormatter
                      value={job.SellingPrice.Float64.toFixed(2)}
                      thousandSeparator
                    />
                  </td>
                  <td className="px-4 text-right">
                    <NumberFormatter
                      value={(
                        job.SellingPrice.Float64 * job.Amount.Float64
                      ).toFixed(2)}
                      thousandSeparator
                    />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <Divider my={10} />
        {/* Summary */}
        <div className="mb-8 flex justify-end">
          <div className="w-64">
            {/* <div className="flex justify-between">
              <span>ราคารวม</span>
              <span>200,000.00 บาท</span>
            </div> */}
            <div className="flex justify-between">
              <span>
                ภาษี {getExportQuotationByProject.data?.data.TaxPercentage}%
              </span>
              <span>7 %</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>ราคาสุทธิ</span>
              <span>
                {getExportQuotationByProject.data?.data.FinalAmount.Float64} บาท
              </span>
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
