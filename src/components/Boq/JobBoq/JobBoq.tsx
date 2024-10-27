import { Button, Modal, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import useGetBoqFromProject from "@/hooks/queries/boq/useGetBoqFromProject";
import { type JobBoqSchemaType } from "@/schemas/boq/jobboq.schema";
import { modals } from "@mantine/modals";
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";
import useAddJobBoq from "@/hooks/mutates/boq/useAddJobBoq";
import useDeleteJobBoq from "@/hooks/mutates/boq/useDeleteJobBoq";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { AxiosError } from "axios";
import JobBoqForm from "../JobBoqForm/JobBoqForm";
import { useState } from "react";

interface Props {
  project_id: string;
}

export default function JobBoq(props: Props) {
  const getBoqFromProject = useGetBoqFromProject({
    project_id: props.project_id,
  });
  const addJobBoq = useAddJobBoq();
  const deleteJobBoq = useDeleteJobBoq();

  const [openedAdd, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [EditJobBoq, setEditJobBoq] = useState<JobBoqSchemaType>();

  const onAddJobBoq = (data: JobBoqSchemaType) => {
    addJobBoq.mutate(
      {
        boq_id: getBoqFromProject.data?.data.id!,
        job_id: data.job_id,
        labor_cost: data.labor_cost,
        quantity: data.quantity,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "สําเร็จ",
            message: "เพิ่มงานเข้า boq สําเร็จ",
            color: "green",
            loading: false,
          });
          closeAdd();
          getBoqFromProject.refetch();
        },
      },
    );
  };

  //   const onEditJobBoq = (data: JobBoqSchemaType) => {
  //     updateMaterialJob.mutate(
  //       {
  //         job_id: props.id!,
  //         material_id: data.material_id,
  //         quantity: data.quantity,
  //       },
  //       {
  //         onSuccess: () => {
  //           notifications.show({
  //             title: "สําเร็จ",
  //             message: "แก้ไขจำนวน สําเร็จ",
  //             color: "green",
  //             loading: false,
  //           });
  //           closeEdit();
  //           getJobApi.refetch();
  //         },
  //       },
  //     );
  //   };

  type ColumnType = NonNullable<
    typeof getBoqFromProject.data
  >["data"]["jobs"] extends (infer T)[] | null | undefined
    ? T
    : never;

  const onDeleteJobBoq = (data: ColumnType) => {
    modals.openConfirmModal({
      ...DeleteConfirmModalConfig,
      children: (
        <Text size="sm">
          คุณต้องการลบวัสดุออกจากงาน <b>{data.name}</b> ใช่หรือไม่ ?
        </Text>
      ),
      onConfirm: () => {
        deleteJobBoq.mutate(
          {
            boq_id: getBoqFromProject.data?.data.id!,
            job_id: data.job_id,
          },
          {
            onSuccess: () => {
              notifications.show({
                title: "สําเร็จ",
                message: "ลบวัสดุออกจากงาน สําเร็จ",
                color: "green",
              });
              getBoqFromProject.refetch();
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

  return (
    <>
      <Modal
        opened={openedAdd}
        onClose={closeAdd}
        title="เพิ่มงานเข้า boq"
        centered
      >
        <JobBoqForm type="create" onFinish={onAddJobBoq} />
      </Modal>
      <Modal opened={openedEdit} onClose={closeEdit} title="แก้ไขงาน" centered>
        <JobBoqForm
          //   data={EditMaterial}
          type="edit"
        />
      </Modal>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Text fw={700}>งานทั้งหมด</Text>
          <div>
            <Button onClick={openAdd}>เพิ่มงาน</Button>
          </div>
        </div>
        <DataTable
          records={getBoqFromProject.data?.data.jobs}
          columns={[
            {
              accessor: "name",
              title: "ชื่องาน",
            },
            {
              accessor: "description",
              title: "ราบละเอียดงาน",
            },
            {
              accessor: "quantity",
              title: "จำนวน",
            },
            {
              accessor: "unit",
              title: "หน่วย",
            },
            {
              accessor: "labor_cost",
              title: "ค่าแรง",
            },
            {
              accessor: "name",
              title: "ดำเนินการ",
              render: (data) => (
                <div className="flex gap-1">
                  <Button
                    onClick={() => {
                      //   setEditJobBoq({
                      //     job_id: data.job_id,
                      //     labor_cost: data.,
                      //     quantity: data.quantity,
                      //   });
                      openEdit();
                    }}
                  >
                    แก้ไข
                  </Button>
                  <Button onClick={() => onDeleteJobBoq(data)}>ลบ</Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
