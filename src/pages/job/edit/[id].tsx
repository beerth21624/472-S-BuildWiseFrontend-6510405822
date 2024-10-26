import BackButton from "@/components/BackButton/BackButton";
import JobForm from "@/components/Job/JobForm/JobForm";
import { Text } from "@mantine/core";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function ClientEdit(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
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
          name: "งานทดสอบ",
          description: "งานทดสอบ",
          unit: "unit",
          material: [
            {
              material_id: "material_1",
            },
          ],
        }}
        type="edit"
      />
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
