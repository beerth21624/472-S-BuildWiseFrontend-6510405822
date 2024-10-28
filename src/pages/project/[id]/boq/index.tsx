import BackButton from "@/components/BackButton/BackButton";
import JobBoq from "@/components/Boq/JobBoq/JobBoq";
import GeneralCost from "@/components/Boq/GeneralCost/GeneralCost";
import useGetBoqFromProject from "@/hooks/queries/boq/useGetBoqFromProject";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { getBoqStatusMap } from "@/utils/boqStatusMap";
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
import useApproveBoq from "@/hooks/mutates/boq/useApproveBoq";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";

export default function BOQ(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProject = useGetProject({ id: props.id ?? "" });
  const getBoqFromProject = useGetBoqFromProject({
    project_id: props.id ?? "",
  });
  const approveBoq = useApproveBoq();
  const onChangeStatus = () => {
    modals.openConfirmModal({
      title: "เปลี่ยนสถานะ",
      children: <Text size="sm">คุณต้องการเปลี่ยนสถานะใช่หรือไม่ ?</Text>,
      labels: { confirm: "ยืนยัน", cancel: "ยกเลิก" },
      onConfirm: () => {
        approveBoq.mutate(
          {
            boq_id: getBoqFromProject.data?.data.id!,
          },
          {
            onSuccess: () => {
              notifications.show({
                title: "สําเร็จ",
                message: "อนุมัติ boq สําเร็จ",
                color: "green",
              });
              getBoqFromProject.refetch();
            },
          },
        );
      },
    });
  };

  const isApproved = getBoqFromProject.data?.data.status === "approved";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <BackButton href={`/project/${props.id}`} />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Text fz={"xl"} fw={700}>
              BOQ - {getProject.data?.data.name}
            </Text>
            <Badge variant="dot">
              {
                getBoqStatusMap(getBoqFromProject.data?.data.status ?? "")
                  ?.label
              }
            </Badge>
          </div>
          <div className="flex gap-3">
            <a target="_blank" href={`/api/report/boq/${getBoqFromProject.data?.data.id}`}>
              <Button
                variant="default"
                leftSection={<IconFileText size={15} />}
              >
                BOQ
              </Button>
            </a>
            <Button disabled={isApproved} onClick={onChangeStatus}>
              เปลี่ยนสถานะ
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="job">
        <Tabs.List>
          <Tabs.Tab value="job">งานทั้งหมด</Tabs.Tab>
          <Tabs.Tab value="general_cost">ค่าใช้จ่ายทั่วไปของ BOQ</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="job" className="py-3">
          <JobBoq project_id={props.id!} />
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
