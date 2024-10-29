import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";
import { BarChart } from "@mantine/charts";

export default function Summary(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const getProject = useGetProject({ id: props.id! });
//   const 
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
      <BarChart
        h={300}
        data={[
          { month: "January", Smartphones: 1200 },
          { month: "February", Smartphones: 1900 },
          { month: "March", Smartphones: 400 },
          { month: "April", Smartphones: 1000 },
          { month: "May", Smartphones: 800 },
          { month: "June", Smartphones: 750 },
        ]}
        dataKey="month"
        series={[{ name: "Smartphones", color: "violet.6" }]}
        tickLine="y"
        gridAxis="xy"
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
