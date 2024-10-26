import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledSelect from "@/components/Controlled/ControlledSelect";
import {
  boqGeneralCostSchema,
  BoqGeneralCostSchemaType,
} from "@/schemas/boq/boq-general-cost.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  type: "create" | "edit";
  onFinish?: (data: BoqGeneralCostSchemaType) => void;
  data?: BoqGeneralCostSchemaType;
}

export default function GeneralCostForm(props: Props) {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BoqGeneralCostSchemaType>({
    resolver: zodResolver(boqGeneralCostSchema),
  });

  const onFinish = (data: BoqGeneralCostSchemaType) => {
    console.log(data);
    props.onFinish?.(data);
  };

  useEffect(() => {
    if (props.data) {
    }
  }, [props.data, setValue]);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFinish)}>
      <ControlledSelect
        control={control}
        name="type_name"
        props={{
          label: "ประเภทค่าใช้จ่าย",
          placeholder: "กรอกประเภทค่าใช้จ่าย",
          withAsterisk: true,
        }}
      />
      <ControlledInputText
        control={control}
        name="name"
        props={{
          label: "ชื่อค่าใช้จ่าย",
          placeholder: "กรอกชื่อค่าใช้จ่าย",
          withAsterisk: true,
        }}
      />
      <ControlledInputText
        control={control}
        name="cost"
        props={{
          label: "ราคาประมาณการ",
          placeholder: "กรอกราคาประมาณการ",
          withAsterisk: true,
        }}
      />
      {props.type === "create" ? (
        <Button type="submit">บันทึก</Button>
      ) : (
        <Button type="submit">บันทึก</Button>
      )}
    </form>
  );
}
