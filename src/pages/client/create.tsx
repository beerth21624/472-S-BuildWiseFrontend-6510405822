import BackButton from "@/components/BackButton/BackButton";
import { Text } from "@mantine/core";
import ClientForm from "@/components/Client/ClientForm/ClientForm";

export default function ClientCreate() {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการ Client" href="/client" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          สร้าง Client
        </Text>
      </div>
      <ClientForm type="create" />
    </div>
  );
}
