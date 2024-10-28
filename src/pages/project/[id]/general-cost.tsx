import BackButton from "@/components/BackButton/BackButton";
import { Button, Menu, Modal, rem, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

export default function GeneralCost(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  return (
    <>
      <Modal
        opened={openedAdd}
        onClose={closeAdd}
        title="เพิ่มค่าใช้จ่าย"
      ></Modal>
      <Modal
        opened={openedEdit}
        onClose={closeEdit}
        title="แก้ไขค่าใช้จ่าย"
      ></Modal>
      <div className="flex flex-col gap-3">
        <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
        <div className="flex items-center justify-between">
          <Text fw={700}>ค่าใช้จ่ายทั่วไปของโครงการ</Text>
        </div>
        <DataTable
          records={[
            {
              type: "ค่าใช้จ่ายทั่วไป",
              estimated_price: "100 บาท",
            },
          ]}
          // define columns
          columns={[
            {
              accessor: "type",
              title: "ประเภท",
            },
            {
              accessor: "estimated_price",
              title: "ราคาประมาณการ",
            },
            {
              accessor: "id",
              title: "ดำเนินการ",
              textAlign: "center",
              render: (record) => (
                <div className="flex gap-2">
                  <Button>asdf</Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      id: context.query.id?.toString(),
    },
  };
}
