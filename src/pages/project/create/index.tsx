import BackButton from "@/components/BackButton/BackButton";
import { Button, Text } from "@mantine/core";
import { Control, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledInputTextarea from "@/components/Controlled/ControlledInputTextarea";
import ControlledDatePicker from "@/components/Controlled/ControlledDatePicker";
import { IconLink } from "@tabler/icons-react";
import { useEffect } from "react";
import {
  createProjectSchema,
  type CreateProjectSchemaType,
} from "@/schemas/project/create-project.schema copy";
import ControlledThailandAddress from "@/components/Controlled/ControlledThailandAddress/ControlledThailandAddress";
import { AddressSchemaType } from "@/schemas/address.schema";

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
    // setValue("contract_url", "http://localhost:3000/project/create");
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <BackButton label="กลับไปหน้ารายการโครงการ" href="/project" />
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
          props={{
            label: "ชื่อโครงการ",
            placeholder: "กรอกชื่อโครงการ",
            withAsterisk: true,
          }}
        />
        <ControlledInputTextarea
          control={control}
          name="project_details"
          props={{
            label: "รายละเอียดโครงการ",
            placeholder: "กรอกรายละเอียดโครงการ",
            withAsterisk: true,
          }}
        />
        <ControlledThailandAddress
          control={control as unknown as Control<AddressSchemaType>}
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
        {/* <ControlledInputText
          control={control}
          name="contract_url"
          props={{
            label: "URL สัญญา",
            placeholder: "กรอก URL สัญญา",
            leftSection: <IconLink size={15} />,
            withAsterisk: true,
          }}
        /> */}
        <Button type="submit">สร้างโครงการ</Button>
      </form>
    </div>
  );
}
