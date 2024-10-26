import BackButton from "@/components/BackButton/BackButton";
import { Text } from "@mantine/core";
import MaterialForm from "@/components/Material/MaterialForm/MaterialForm";

export default function MaterialCreate() {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการวัสดุ" href="/material" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          เพิ่มวัสดุ
        </Text>
      </div>
      <MaterialForm type="create" />
    </div>
  );
}
