import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function Material(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProjectApi = useGetProject({
    id: props.id ?? "",
  });
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="แก้ไขราคา">
        adsf
      </Modal>
      <div className="flex flex-col">
        <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Text size="xl" fw={700}>
              {getProjectApi.data?.data.name}
            </Text>
            <Text size="lg" fw={400}>
              รายการของวัสดุในโครงการ
            </Text>
          </div>
        </div>
        <DataTable
          records={[
            {
              name: "ทราย",
              qty: 18,
              unit: "ถุง",
              estimated_price: 200,
              reference_price: 190,
              actual_price: 195,
              supplier: "ชื่อซัพพลายเออร์",
            },
          ]}
          columns={[
            {
              accessor: "name",
              title: "",
              render: (value) => <Button onClick={open}>แก้ไข</Button>,
            },
            {
              accessor: "name",
              title: "วัสดุ",
            },
            {
              accessor: "qty",
              title: "QTY",
            },
            {
              accessor: "unit",
              title: "หน่วย",
            },
            {
              accessor: "estimated_price",
              title: "ราคาประเมินต่อหน่วย",
            },
            {
              accessor: "reference_price",
              title: "ราคาอ้างอิงต่อหน่วย",
            },
            {
              accessor: "actual_price",
              title: "ราคาซื้อจริงต่อหน่วย",
            },
            {
              accessor: "supplier",
              title: "ซัพพลายเออร์",
            },
            {
              accessor: "total_estimated_price",
              title: "ราคาประเมินรวม",
              render: (value) => (
                <Text>{value.estimated_price * value.qty}</Text>
              ),
            },
            {
              accessor: "total_actual_price",
              title: "ราคาจริงรวม",
              render: (value) => <Text>{value.actual_price * value.qty}</Text>,
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
