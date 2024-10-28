import BackButton from "@/components/BackButton/BackButton";
import MaterialProjectForm from "@/components/Project/MaterialProject/MaterialProjectForm/MaterialProjectForm";
import useGetMaterialsProject from "@/hooks/queries/project/MaterialProject/useGetMaterialsProject";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { MaterialProjectSchemaType } from "@/schemas/project/materialProject/material-project.schama";
import { Badge, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { useState } from "react";

export default function Material(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProjectApi = useGetProject({
    id: props.id ?? "",
  });

  const getMaterialsProject = useGetMaterialsProject({
    project_id: props.id ?? "",
  });
  const [EditMaterialProject, setEditMaterialProject] =
    useState<MaterialProjectSchemaType>();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="แก้ไขราคา">
        <MaterialProjectForm project_id={props.id!} type="edit" data={EditMaterialProject} />
      </Modal>
      <div className="flex flex-col">
        <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Text size="xl" fw={700}>
              วัสดุ
            </Text>
            <Text size="md" fw={700}>
              {getProjectApi.data?.data.name}
            </Text>
          </div>
        </div>
        <DataTable
          records={getMaterialsProject.data?.data.materials ?? []}
          columns={[
            {
              accessor: "name",
              title: "วัสดุ",
            },
            {
              accessor: "name",
              title: "จำนวนรวม",
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
              accessor: "avg_actual_price",
              title: "ราคาอ้างอิงต่อหน่วย",
            },
            {
              accessor: "actual_price",
              title: "ราคาซื้อจริงต่อหน่วย",
            },
            {
              accessor: "supplier_name",
              title: "ซัพพลายเออร์",
            },
            {
              accessor: "total_estimated_price",
              title: "ราคาประเมินรวม",
              render: (value) => <Text>{value.estimated_price}</Text>,
            },
            {
              accessor: "total_actual_price",
              title: "ราคาจริงรวม",
              render: (value) => <Text>{value.actual_price}</Text>,
            },
            {
              accessor: "name",
              title: "ดำเนินการ",
              render: (value) => (
                <Button
                  onClick={() => {
                    setEditMaterialProject({
                      material_id: value.material_id!,
                      name: value.name!,
                      supplier_id: "asdfsdf",
                      estimated_price: 100,
                      actual_price: 120,
                    });
                    open();
                  }}
                >
                  แก้ไข
                </Button>
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
