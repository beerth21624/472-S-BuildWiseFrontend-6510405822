import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import {
  Badge,
  Button,
  Card,
  InputLabel,
  Modal,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFileText, IconPencil } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function Quotation(
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
              <div className="flex items-center gap-2">
                ใบเสนอราคา <Badge variant="dot">ทราย</Badge>
              </div>
            </Text>
            <Text size="md" fw={700}>
              {getProjectApi.data?.data.name}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <a target="_blank" href={`/api/report/quotation/asdsdf`}>
              <Button
                variant="default"
                leftSection={<IconFileText size={15} />}
              >
                ใบเสนอราคา
              </Button>
            </a>
            <Button>เปลี่ยนสถานะ</Button>
          </div>
        </div>
        {/* <Table withTableBorder className="mt-3">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ชื่องาน</Table.Th>
              <Table.Th>หน่วยของงาน</Table.Th>
              <Table.Th>จำนวนของงาน</Table.Th>
              <Table.Th>ค่าแรง</Table.Th>
              <Table.Th>ราคาประเมินรวม</Table.Th>
              <Table.Th>ราคาขาย</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>position</Table.Td>
              <Table.Td>name</Table.Td>
              <Table.Td>symbol</Table.Td>
              <Table.Td>mass</Table.Td>
              <Table.Td>mass</Table.Td>
              <Table.Td>
                <TextInput />
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table> */}
        <Card withBorder className="mt-3 flex flex-col gap-3">
          <InputLabel size="md">รายการวัสดุ</InputLabel>
          <DataTable
            records={[
              {
                name: "ทราย",
                unit: "ถุง",
                quantity: "50",
                labor_cost: "40",
                total_estimated_price: "2500",
                sell_price: "2700",
              },
            ]}
            columns={[
              {
                accessor: "name",
                title: "ชื่องาน",
              },
              {
                accessor: "unit",
                title: "หน่วยของงาน",
              },
              {
                accessor: "quantity",
                title: "จำนวนของงาน",
              },
              {
                accessor: "total_labor_cost",
                title: "ราคาค่าแรงรวม",
              },
              {
                accessor: "total_material_price",
                title: "ราคาค่าวัสดุรวม",
              },
              {
                accessor: "total_estimated_price",
                title: "ราคาประเมินรวม",
              },
              {
                accessor: "sell_price",
                title: "ราคาขาย",
              },
              {
                accessor: "name",
                title: "",
                render: () => (
                  <div className="flex gap-2">
                    <Button
                      variant="light"
                      leftSection={<IconPencil size={15} />}
                    >
                      แก้ไขราคาขาย
                    </Button>
                  </div>
                ),
              },
            ]}
          />
        </Card>
        <Card className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <TextInput placeholder="กรอกราคาขายค่าใช้จ่ายทั่วไป" />
                <Button>บันทึก</Button>
              </div>
              <div className="mt-3 flex gap-2">
                <TextInput placeholder="กรอกภาษี" />
                <Button>บันทึก</Button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-5">
                <div className="flex justify-end">
                  <div className="flex flex-col items-end font-bold">
                    <div>ราคารวม</div>
                    <div>ภาษี</div>
                    <div>ภาษีรวม</div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="flex flex-col">
                    <div>200,000</div>
                    <div>7%</div>
                    <div>205,0000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex justify-end">
          <Button className="w-full">บันทึก</Button>
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
