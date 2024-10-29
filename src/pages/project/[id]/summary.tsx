import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function Summary(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProject = useGetProject({ id: props.id! });
  return (
    <div className="flex flex-col">
      <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold">
            <div className="flex items-center gap-2">สรุป</div>
          </div>
          <Text size="md" fw={700}>
            {getProject.data?.data.name}
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="default" leftSection={<IconFileText size={15} />}>
            Export
          </Button>
        </div>
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
