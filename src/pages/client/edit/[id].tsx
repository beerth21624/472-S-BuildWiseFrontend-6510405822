import BackButton from "@/components/BackButton/BackButton";
import ClientForm from "@/components/Client/ClientForm/ClientForm";
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
        <BackButton label="ย้อนกลับไปหน้ารายการ Client" href="/client" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          แก้ไข Client
        </Text>
      </div>
      <ClientForm
        data={{
          address: "asdf",
          district: "district",
          email: "pawin.bu@ku.th",
          name: "พาวิน บุญก่อสร้าง",
          phone: "086-3453-446",
          postal_code: "postal_code",
          province: "province",
          subdistrict: "subdistrict",
          tax_id: "1234567890123",
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
