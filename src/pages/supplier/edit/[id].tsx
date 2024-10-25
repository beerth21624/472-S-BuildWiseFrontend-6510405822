import BackButton from "@/components/BackButton/BackButton";
import SupplierForm from "@/components/Supplier/SupplierForm/SupplierForm";
import { Text } from "@mantine/core";
import {
  type GetServerSidePropsContext,
  type InferGetServerSidePropsType,
} from "next";

export default function SupplierEdit(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการ Supplier" href="/supplier" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          แก้ไข Supplier
        </Text>
      </div>
      <SupplierForm
        data={{
          address: "asdf",
          district: "district",
          email: "pawin.bu@ku.th",
          name: "พาวิน บุญก่อสร้าง",
          phone: "086-3453-446",
          postal_code: "postal_code",
          province: "province",
          subdistrict: "subdistrict",
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
