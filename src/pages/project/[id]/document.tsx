import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Menu, Modal, rem, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCertificate,
  IconDotsVertical,
  IconPencil,
  IconReceipt,
  IconTrash,
  IconUpload,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

export default function Document(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProject = useGetProject({ id: props.id ?? "" });

  const [
    openedAddContract,
    { open: openAddContract, close: closeAddContract },
  ] = useDisclosure(false);
  const [
    openedEditContract,
    { open: openEditContract, close: closeEditContract },
  ] = useDisclosure(false);

  const [openedAddInvoice, { open: openAddInvoice, close: closeAddInvoice }] =
    useDisclosure(false);
  const [
    openedEditInvoice,
    { open: openEditInvoice, close: closeEditInvoice },
  ] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={openedAddContract}
        onClose={closeAddContract}
        title="เพิ่มสัญญา"
      ></Modal>
      <Modal
        opened={openedEditContract}
        onClose={closeEditContract}
        title="แก้ไขสัญญา"
      ></Modal>

      <Modal
        opened={openedAddInvoice}
        onClose={closeAddInvoice}
        title="เพิ่มใบแจ้งหนี้"
      ></Modal>
      <Modal
        opened={openedEditInvoice}
        onClose={closeEditInvoice}
        title="แก้ไขใบแจ้งหนี้"
      ></Modal>
      <div className="flex flex-col gap-3">
        <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Text size="xl" fw={700}>
              จัดการเอกสาร
            </Text>
            <Text size="md" fw={700}>
              {getProject.data?.data.name}
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="compact-sm"
            onClick={openAddContract}
            leftSection={<IconCertificate size={15} />}
          >
            เพิ่มใบสัญญา
          </Button>
          <Button
            size="compact-sm"
            onClick={openAddInvoice}
            leftSection={<IconReceipt size={15} />}
          >
            เพิ่มใบแจ้งหนี้
          </Button>
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
                <Menu
                  shadow="md"
                  width={200}
                  position="bottom-end"
                  trigger="hover"
                  withArrow
                >
                  <Menu.Target>
                    <UnstyledButton variant="transparent">
                      <IconDotsVertical size={15} color="gray" />
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>การดำเนินการ</Menu.Label>
                    <Link href={"/client/edit/" + "tesss"}>
                      <Menu.Item
                        leftSection={
                          <IconPencil
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        แก้ไข
                      </Menu.Item>
                    </Link>
                    <Menu.Item
                      leftSection={
                        <IconTrash
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                      color="red"
                    >
                      ลบ
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
