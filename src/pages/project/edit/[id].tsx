import BackButton from "@/components/BackButton/BackButton";
import ProjectForm from "@/components/Project/ProjectForm/ProjectForm";
import { Text } from "@mantine/core";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function ProjectEdit(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton />
      </div>
      <Text size="xl" fw={700}>
        แก้ไขโครงการ
      </Text>
      <ProjectForm type="edit" />
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
