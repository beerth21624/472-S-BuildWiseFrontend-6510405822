import BackButton from "@/components/BackButton/BackButton";
import Boq from "@/components/Boq/Boq/Boq";
import BoqForm from "@/components/Boq/BoqForm/BoqForm";
import GeneralCost from "@/components/Boq/GeneralCost/GeneralCost";
import { getProjectStatusMap } from "@/utils/projectStatusMap";
import {
  Badge,
  Button,
  Menu,
  rem,
  Select,
  Table,
  Tabs,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconFileText,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

export default function BOQ(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <BackButton href={`/project/${props.id}`} />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Text fz={"xl"} fw={700}>
              BOQ - โครงการคอนโด 30 ชั้น
            </Text>
            <Badge variant="dot">
              {getProjectStatusMap("in_progress")?.label}
            </Badge>
          </div>
          <div className="flex gap-3">
            <Button variant="default" leftSection={<IconFileText size={15} />}>
              BOQ
            </Button>
            <Button>เปลี่ยนสถานะ</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="job">
        <Tabs.List>
          <Tabs.Tab value="job">งานทั้งหมด</Tabs.Tab>
          <Tabs.Tab value="general_cost">ค่าใช้จ่ายทั่วไปของ BOQ</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="job" className="py-3">
          <Boq />
        </Tabs.Panel>
        <Tabs.Panel value="general_cost" className="py-3">
          <GeneralCost />
        </Tabs.Panel>
      </Tabs>
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
