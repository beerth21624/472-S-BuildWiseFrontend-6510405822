import BackButton from "@/components/BackButton/BackButton";
import MaterialForm from "@/components/Material/MaterialForm/MaterialForm";
import { Text } from "@mantine/core";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function MaterialEdit(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการวัสดุ" href="/material" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          แก้ไขวัสดุ
        </Text>
      </div>
      <MaterialForm
        data={{
          name: "เหล็ก",
          unit: "unit",
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
