import BackButton from "@/components/BackButton/BackButton";
import BoqForm from "@/components/Boq/BoqForm/BoqForm";
import { Select, Table, Text, TextInput } from "@mantine/core";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function BOQ(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <BackButton href={`/project/${props.id}`} />
        <Text fz={"xl"} fw={700}>
          BOQ - โครงการคอนโด 30 ชั้น
        </Text>
      </div>
      <BoqForm type="create" />
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
