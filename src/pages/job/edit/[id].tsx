import BackButton from "@/components/BackButton/BackButton";
import JobForm from "@/components/Job/JobForm/JobForm";
import useUpdateJob from "@/hooks/mutates/job/useUpdateJob";
import useGetJob from "@/hooks/queries/job/useGetJob";
import {
  type JobSchemaType,
  type MaterialJobSchemaType,
} from "@/schemas/job/job.schema";
import sha256 from "crypto-js/sha256";
import {
  Badge,
  Button,
  InputLabel,
  NumberInput,
  Select,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { modals } from "@mantine/modals";
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";

export default function ClientEdit(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const navigate = useRouter();
  const getJobApi = useGetJob({ job_id: props.id! });
  const updateJobApi = useUpdateJob();

  const onEdit = (data: JobSchemaType) => {
    const keyNotification = notifications.show({
      title: "กำลังโหลด",
      message: "กำลังแก้ไขงาน กรุณารอสักครู่...",
      color: "green",
      autoClose: 3000,
      loading: true,
    });
    updateJobApi.mutate(
      {
        id: props.id!,
        description: data.description,
        name: data.name,
        unit: data.unit,
      },
      {
        onSuccess: () => {
          notifications.update({
            title: "สําเร็จ",
            message: "แก้ไขงาน สําเร็จ",
            color: "green",
            autoClose: 3000,
            id: keyNotification,
            loading: false,
          });
          navigate.push("/job");
        },
        onError: (error) => {
          notifications.update({
            title: "เกิดข้อผิดพลาด",
            message: error.message,
            color: "red",
            autoClose: 3000,
            loading: false,
            id: keyNotification,
          });
        },
      },
    );
  };

  const [Materials, setMaterials] = useState<MaterialJobSchemaType[]>([
    {
      material_id: "PAINT001",
      quantity: 5.5,
    },
    {
      material_id: "PRIMER001",
      quantity: 2.0,
    },
  ]);

  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการงาน" href="/job" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          แก้ไขงาน
        </Text>
      </div>
      <JobForm
        data={{
          name: getJobApi.data?.data.name ?? "",
          description: getJobApi.data?.data.description ?? "",
          unit: getJobApi.data?.data.unit ?? "",
        }}
        onFinish={onEdit}
        type="edit"
      />
      <div className="mt-3 flex flex-col">
        <InputLabel>เลือกวัสดุ</InputLabel>
        <div className="flex flex-col gap-2">
          {Materials.map((material, index) => (
            <Material key={index} data={material} />
          ))}
        </div>
        <div className="mt-3 flex justify-center">
          <Button variant="outline">เพิ่มวัสดุ</Button>
        </div>
      </div>
    </div>
  );
}

type MaterialProps = {
  data: MaterialJobSchemaType;
  onSave?: (data: MaterialJobSchemaType) => void;
  onDelete?: (data: MaterialJobSchemaType) => void;
};

function Material(props: MaterialProps) {
  const [data, setData] = useState<MaterialJobSchemaType>(props.data);

  const old_hash = sha256(JSON.stringify(props.data)).toString();
  const new_hash = sha256(JSON.stringify(data)).toString();
  const isChange = old_hash !== new_hash;

  return (
    <div className="flex gap-2">
      <Select
        className="w-full"
        defaultValue={data.material_id}
        data={[
          {
            value: "PAINT001",
            label: "PAINT001",
          },
          {
            value: "PRIMER001",
            label: "PRIMER001",
          },
        ]}
        onChange={(data) => {
          setData((pre) => ({
            ...pre,
            material_id: data?.toString() ?? "",
          }));
        }}
        placeholder="เลือกวัสดุ"
        searchable
      />
      <NumberInput
        defaultValue={data.quantity}
        className="w-full"
        onChange={(value) => {
          setData((pre) => ({
            ...pre,
            quantity: (value as number) ?? 0,
          }));
        }}
      />
      <div className="min-w-[100px]">
        {isChange ? (
          <Button
            onClick={() => {
              props.onSave?.(data);
            }}
            color="green"
            fullWidth
          >
            บันทึก
          </Button>
        ) : (
          <Button
            onClick={() => {
              modals.openConfirmModal({
                ...DeleteConfirmModalConfig,
                children: (
                  <Text size="sm">
                    คุณแน่ใจหรือไม่ว่าต้องการลบ{" "}
                    <Badge>{data.material_id}</Badge>
                  </Text>
                ),
                onConfirm: () => {
                  props.onDelete?.(data);
                },
              });
            }}
            fullWidth
            color="red"
          >
            ลบ
          </Button>
        )}
      </div>
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
