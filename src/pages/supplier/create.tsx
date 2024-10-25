import BackButton from "@/components/BackButton/BackButton";
import { Text } from "@mantine/core";
import SupplierForm from "@/components/Supplier/SupplierForm/SupplierForm";

export default function SupplierCreate() {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการ Supplier" href="/supplier" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          สร้าง Supplier
        </Text>
      </div>
      <SupplierForm type="create" />
    </div>
  );
}
