import BackButton from "@/components/BackButton/BackButton";
import JobForm from "@/components/Job/JobForm/JobForm";
import { Text } from "@mantine/core";

export default function JobCreate() {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="ย้อนกลับไปหน้ารายการงาน" href="/job" />
      </div>
      <div className="flex justify-between">
        <Text size="xl" fw={700}>
          เพิ่มงาน
        </Text>
      </div>
      <JobForm type="create" />
    </div>
  );
}
