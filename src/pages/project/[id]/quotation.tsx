import BackButton from "@/components/BackButton/BackButton";
import useApproveQuotationByProject from "@/hooks/mutates/quotation/useApproveQuotationByProject";
import useGetProject from "@/hooks/queries/project/useGetProject";
import useGetQuotationByProject from "@/hooks/queries/quotation/useGetQuotationByProject";
import { getQuotationStatusMap } from "@/utils/quotationStatusMap";
import {
  Badge,
  Button,
  Card,
  InputLabel,
  Modal,
  NumberFormatter,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconFileText, IconPencil } from "@tabler/icons-react";
import { AxiosError } from "axios";
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
  const getQuotationByProject = useGetQuotationByProject({
    project_id: props.id ?? "",
  });
  const [opened, { open, close }] = useDisclosure(false);
  const approveQuotationByProject = useApproveQuotationByProject();

  const onChangeStatus = () => {
    modals.openConfirmModal({
      title: "ยืนยันการเปลี่ยนสถานะ",
      centered: true,
      children: <Text>ยืนยันการเปลี่ยนสถานะ</Text>,
      labels: { confirm: "ยืนยัน", cancel: "ยกเลิก" },
      onConfirm: () => {
        approveQuotationByProject.mutate(
          { project_id: getProjectApi.data?.data.id! },
          {
            onSuccess: () => {
              notifications.show({
                title: "สําเร็จ",
                message: "อนุมัติใบเสนอราคาสําเร็จ",
                color: "green",
              });
            },
            onError: (error) => {
              if (error instanceof AxiosError) {
                notifications.show({
                  title: "เกิดข้อผิดพลาด",
                  message: error.response?.data.error,
                  color: "red",
                });
              }
            },
          },
        );
      },
    });
  };

  const isDisable = getQuotationByProject.data?.data.status === "approved";

  return (
    <>
      <Modal opened={opened} onClose={close} title="แก้ไขราคา">
        adsf
      </Modal>
      <div className="flex flex-col">
        <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-bold">
              <div className="flex items-center gap-2">
                ใบเสนอราคา{" "}
                <Badge variant="dot">
                  {
                    getQuotationStatusMap(
                      getQuotationByProject.data?.data.status ?? "",
                    )?.label
                  }
                </Badge>
              </div>
            </div>
            <Text size="md" fw={700}>
              {getProjectApi.data?.data.name}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <a target="_blank" href={`/api/report/quotation/${props.id}`}>
              <Button
                variant="default"
                leftSection={<IconFileText size={15} />}
              >
                Export
              </Button>
            </a>
            <Button disabled={isDisable} onClick={onChangeStatus}>
              เปลี่ยนสถานะ
            </Button>
          </div>
        </div>
        <Card withBorder className="mt-3 flex flex-col gap-3">
          <InputLabel size="md">รายการวัสดุ</InputLabel>
          <DataTable
            records={getQuotationByProject.data?.data.jobs ?? []}
            columns={[
              {
                accessor: "name",
                title: "ชื่องาน",
              },
              {
                accessor: "quantity",
                title: "จำนวนของงาน",
              },
              {
                accessor: "unit",
                title: "หน่วยของงาน",
              },
              {
                accessor: "labor_cost",
                title: "ราคาค่าแรงต่อหน่วย",
              },
              {
                accessor: "material_cost",
                title: "ราคาวัดสุประเมินต่อหน่วย",
              },
              {
                accessor: "total_estimated_price_per_unit",
                title: "ราคาประเมินรวมต่อหน่วย",
              },

              {
                accessor: "selling_price",
                title: "ราคาขายต่อหน่วย",
              },
              {
                accessor: "total_estimated_price",
                title: "ราคาประเมินรวม",
              },
              {
                accessor: "selling_price",
                title: "ราคาขายรวม",
                render: (record) => (
                  <div className="text-right">
                    {(record?.selling_price ?? 0) * record?.quantity}
                  </div>
                ),
              },
              {
                accessor: "name",
                title: "",
                render: () => (
                  <div className="flex gap-2">
                    <Button
                      disabled={isDisable}
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
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Card withBorder className="col-span-2 h-full w-full">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <TextInput
                  disabled={isDisable}
                  placeholder="กรอกราคาขายค่าใช้จ่ายทั่วไป"
                  label="กรอกราคาขายค่าใช้จ่ายทั่วไป"
                />
                <TextInput
                  disabled={isDisable}
                  placeholder="กรอกภาษี"
                  label="กรอกภาษี"
                />
              </div>
              <div className="flex gap-5">
                <div className="flex justify-end">
                  <div className="flex flex-col items-end font-bold">
                    <div>ค่าใช้จ่ายทั่วไป</div>
                    <div>ต้นทุน</div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="flex flex-col">
                    <div>
                      <NumberFormatter
                        value={
                          getQuotationByProject.data?.data.summary
                            .total_general_cost
                        }
                        thousandSeparator
                      />
                    </div>
                    <div>7%</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card withBorder className="flex h-full items-end">
            <div className="flex gap-5">
              <div className="flex justify-end">
                <div className="flex flex-col items-end font-bold">
                  <div>ราคารวม</div>
                  <div>ภาษี (7%)</div>
                  <div>ราคาสุทธิ</div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex flex-col">
                  <div>
                    <NumberFormatter
                      value={getQuotationByProject.data?.data.summary.subtotal}
                      thousandSeparator
                    />
                  </div>
                  <div>
                    <NumberFormatter
                      value={getQuotationByProject.data?.data.summary.tax}
                      thousandSeparator
                    />
                  </div>
                  <div>
                    <NumberFormatter
                      value={getQuotationByProject.data?.data.summary.total}
                      thousandSeparator
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-5 flex justify-end">
          <Button className="w-full" disabled={isDisable}>
            บันทึก
          </Button>
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
