import BackButton from "@/components/BackButton/BackButton";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledInputTextarea from "@/components/Controlled/ControlledInputTextarea";
import ControlledThailandAddress from "@/components/Controlled/ControlledThailandAddress/ControlledThailandAddress";
import { type AddressSchemaType } from "@/schemas/address.schema";
import {
  createProjectSchema,
  type CreateProjectSchemaType,
} from "@/schemas/project/create-project.schema copy";
import { type ProjectSchemaType } from "@/schemas/project/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text } from "@mantine/core";
import { type Control, useForm } from "react-hook-form";

interface Props {
  type: "create" | "edit";
  onFinish?: (data: ProjectSchemaType) => void;
  data?: ProjectSchemaType;
}

export default function ProjectForm(props: Props) {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectSchemaType>({
    resolver: zodResolver(createProjectSchema),
  });

  const onFinish = (data: ProjectSchemaType) => {
    console.log(data);
    props.onFinish?.(data);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onFinish)}>
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
      {/* <div className="flex gap-3">
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
        </div> */}
      <Button type="submit">สร้างโครงการ</Button>
    </form>
  );
}
