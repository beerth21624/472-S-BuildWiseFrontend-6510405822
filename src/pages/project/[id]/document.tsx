import BackButton from "@/components/BackButton/BackButton";
import DocumentForm from "@/components/Document/DocumentForm/DocumentForm";
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { DocumentSchemaType } from "@/schemas/document/document.schema";
import {
  ActionIcon,
  Button,
  Card,
  InputLabel,
  Menu,
  Modal,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import {
  IconCertificate,
  IconDotsVertical,
  IconPencil,
  IconReceipt,
  IconTrash,
  IconUpload,
  IconX,
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

  const [openedAddInvoice, { open: openAddInvoice, close: closeAddInvoice }] =
    useDisclosure(false);

  const onAddContract = (data: DocumentSchemaType) => {
    console.log(data);
  };

  const onAddInvoice = (data: DocumentSchemaType) => {
    console.log(data);
  };

  const onDeleteContract = (data: DocumentSchemaType) => {
    modals.openConfirmModal({
      ...DeleteConfirmModalConfig,
      children: (
        <Text size="sm">
          คุณต้องการลบสัญญา <b>{data.file_url}</b> ใช่หรือไม่ ?
        </Text>
      ),
      onConfirm: () => {
        console.log(data);
      },
    });
  };

  const onDeleteInvoice = (data: DocumentSchemaType) => {
    modals.openConfirmModal({
      ...DeleteConfirmModalConfig,
      children: (
        <Text size="sm">
          คุณต้องการลบใบแจ้งหนี้ <b>{data.file_url}</b> ใช่หรือไม่ ?
        </Text>
      ),
      onConfirm: () => {
        console.log(data);
      },
    });
  };

  return (
    <>
      <Modal
        opened={openedAddContract}
        onClose={closeAddContract}
        title="เพิ่มสัญญา"
      >
        <DocumentForm
          type="create"
          data={{ project_id: props.id!, file_url: "" }}
          onFinish={onAddContract}
        />
      </Modal>

      <Modal
        opened={openedAddInvoice}
        onClose={closeAddInvoice}
        title="เพิ่มใบแจ้งหนี้"
      >
        <DocumentForm
          type="create"
          data={{ project_id: props.id!, file_url: "" }}
          onFinish={onAddInvoice}
        />
      </Modal>
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
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <InputLabel size="md">สัญญา</InputLabel>
            <Button onClick={openAddContract} size="compact-xs">
              เพิ่ม
            </Button>
          </div>
          <Card withBorder>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <IconCertificate />
                <div>ใบสัญญา</div>
              </div>
              <ActionIcon color="red" variant="transparent">
                <IconX />
              </ActionIcon>
            </div>
          </Card>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <InputLabel size="md">ใบแจ้งหนี้</InputLabel>
            <Button onClick={openAddInvoice} size="compact-xs">
              เพิ่ม
            </Button>
          </div>
          {[...new Array(5)].map((_, index) => (
            <Card withBorder key={index}>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <IconReceipt />
                  <div>ใบแจ้งหนี้</div>
                </div>
                <ActionIcon color="red" variant="transparent">
                  <IconX />
                </ActionIcon>
              </div>
            </Card>
          ))}
        </div>
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
