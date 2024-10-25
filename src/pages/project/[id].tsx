import BackButton from "@/components/BackButton/BackButton";
import { Button, Card, Divider, Group, Text } from "@mantine/core";
import clsx from "clsx";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

interface PropsFieldLabel {
  label: string;
  children: React.ReactNode;
  valueClass?: string;
  labelClass?: string;
  type?: "vertical" | "horizontal";
}

export function FieldLabel(props: PropsFieldLabel) {
  return (
    <div
      className={clsx(
        "flex items-start gap-2",
        props.type === "vertical" && "flex-col",
      )}
    >
      <div className={props.labelClass}>{props.label} :</div>
      <div className={props.valueClass ?? "font-semibold"}>
        {props.children}
      </div>
    </div>
  );
}

export default function Project(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <BackButton label="ย้อนกลับไปหน้ารายการโครงการ" href="/project" />
          <Text fz={"xl"} fw={700}>
            โครงการคอนโด 30 ชั้น
          </Text>
        </div>
        <div className="flex gap-1">
          <Button variant="white">BOQ</Button>
          <Button variant="white">ใบเสนอราคา</Button>
          <Button variant="white">วัสดุ</Button>
          <Button variant="white">ค่าใช้จ่าย</Button>
          <Button variant="white">เอกสาร</Button>
          <Button variant="white">สรุป</Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <Card withBorder className="flex gap-3">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">รายละเอียด</div>
              </div>
              <div className="flex flex-col">
                <FieldLabel labelClass="min-w-[5.4rem]" label="ชื่อโครงการ">
                  โครงการคอนโด 30 ชั้น
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="สถานที่">
                  <div>
                    50 ถนน งามวงศ์วาน เสนานิคม, จตุจักร, กรุงเทพมหานคร, 10900
                  </div>
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="ลูกค้า">
                  พาวิน บุญก่อสร้าง
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="สถานะ">
                  กำลังดำเนินการ
                </FieldLabel>
              </div>
            </div>
            <Link href={"/project/edit/" + "tesss"}>
              <Button>แก้ไขโครงการ</Button>
            </Link>
          </div>
        </Card>
        <Card withBorder className="flex flex-col">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">ภาพรวม</div>
              </div>
              <div className="flex justify-between gap-10">
                <div className="flex flex-col">
                  <FieldLabel labelClass="min-w-[8rem]" label="สถานะ BOQ">
                    โครงการคอนโด 30 ชั้น
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="ต้นทุนประกัน">
                    500,000 บาท
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="Quotation สถานะ">
                    โครงการคอนโด 30 ชั้น
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="กำไรประมาณการ">
                    500,000 บาท
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="ราคาขาย">
                    500,000 บาท
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="ราคาขายรวมภาษี">
                    500,000 บาท
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="ต้นทุนจริง">
                    500,000 บาท
                  </FieldLabel>
                  <FieldLabel labelClass="min-w-[8rem]" label="กำไรจริง">
                    500,000 บาท
                  </FieldLabel>
                </div>
              </div>
            </div>
          </div>
        </Card>
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
