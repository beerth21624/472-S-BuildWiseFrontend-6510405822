import BackButton from "@/components/BackButton/BackButton";
import { Button, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createProjectSchema,
  type CreateProjectSchemaType,
} from "@/schemas/create-project.schema";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledInputTextarea from "@/components/Controlled/ControlledInputTextarea";
import ControlledDatePicker from "@/components/Controlled/ControlledDatePicker";
import { IconLink } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Index() {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectSchemaType>({
    resolver: zodResolver(createProjectSchema),
  });

  useEffect(() => {
    setValue("project_name", "โครงการคอนโด 30 ชั้น");
    setValue(
      "project_details",
      "ก่อสร้างอาคารสำนักงาน 20 ชั้นพร้อมระบบสาธารณูปโภคครบครัน",
    );
    setValue("project_start_date", new Date());
    setValue("project_end_date", new Date());
    setValue("contract_url", "http://localhost:3000/project/create");
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <BackButton />
      </div>
      <Text size="xl" fw={700}>
        สร้างโครงการใหม่
      </Text>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        <ControlledInputText
          control={control}
          name="project_name"
          label={"ชื่อโครงการ"}
          placeholder="กรอกชื่อโครงการ"
          required
        />
        <ControlledInputTextarea
          control={control}
          name="project_details"
          required
          label="รายละเอียดโครงการ"
          placeholder="กรอกรายละเอียดโครงการ"
        />
        <div className="flex gap-3">
          <ControlledDatePicker
            className="w-full"
            label="วันที่เริ่มโครงการ"
            clearable
            control={control}
            name="project_start_date"
            placeholder="เลือกวันที่"
            required
          />
          <ControlledDatePicker
            className="w-full"
            label="วันที่สิ้นสุดโครงการ"
            clearable
            control={control}
            name="project_end_date"
            placeholder="เลือกวันที่"
            required
          />
        </div>
        <ControlledInputText
          control={control}
          required
          name="contract_url"
          label={"URL สัญญา"}
          prefix={<IconLink size={15} />}
          placeholder="กรอก URL สัญญา"
        />
        <Button type="submit">สร้างโครงการ</Button>
      </form>
    </div>
  );
}
