import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { getProjectStatusMap } from "@/utils/projectStatusMap";
import { Button, Card, Text } from "@mantine/core";
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
  const getProjectApi = useGetProject({
    id: props.id ?? "",
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <BackButton label="ย้อนกลับไปหน้ารายการโครงการ" href="/project" />
          <Text fz={"xl"} fw={700}>
            {getProjectApi.data?.data.name}
          </Text>
        </div>
        <div className="flex gap-1">
          <Link href={`/project/${props.id}/boq`}>
            <Button variant="white">BOQ</Button>
          </Link>
          <Link href={`/project/${props.id}/quotation`}>
            <Button variant="white">ใบเสนอราคา</Button>
          </Link>
          <Link href={`/project/${props.id}/material`}>
            <Button variant="white">วัสดุ</Button>
          </Link>
          <Link href={`/project/${props.id}/general-cost`}>
            <Button variant="white">ค่าใช้จ่ายทั่วไป</Button>
          </Link>
          <Link href={`/project/${props.id}/document`}>
            <Button variant="white">เอกสาร</Button>
          </Link>
          <Button disabled variant="white">สรุป</Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex gap-3">
          <Button size="xs">เปลี่ยนสถานะ</Button>
          <Button size="xs" color="red">
            ยกเลิกโครงการ
          </Button>
        </div>
        <Card withBorder className="flex gap-3">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">รายละเอียด</div>
              </div>
              <div className="flex flex-col">
                <FieldLabel labelClass="min-w-[5.4rem]" label="ชื่อโครงการ">
                  {getProjectApi.data?.data.name}
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="สถานที่">
                  {getProjectApi.data?.data.address.address},{" "}
                  {getProjectApi.data?.data.address.district},{" "}
                  {getProjectApi.data?.data.address.province},{" "}
                  {getProjectApi.data?.data.address.postal_code}
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="ลูกค้า">
                  {getProjectApi.data?.data.client.name}
                </FieldLabel>
                <FieldLabel labelClass="min-w-[5.4rem]" label="สถานะ">
                  {
                    getProjectStatusMap(getProjectApi.data?.data.status ?? "")
                      ?.label
                  }
                </FieldLabel>
              </div>
            </div>
            <Link href={"/project/edit/" + props.id}>
              <Button>แก้ไขรายละเอียด</Button>
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
