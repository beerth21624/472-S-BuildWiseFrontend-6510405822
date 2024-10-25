import ControlledInputBase from "@/components/Controlled/ControlledInputBase";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledThailandAddress from "@/components/Controlled/ControlledThailandAddress/ControlledThailandAddress";
import { AddressSchemaType } from "@/schemas/address.schema";
import {
  supplierSchema,
  type SupplierSchemaType,
} from "@/schemas/supplier/supplier.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mantine/core";
import { useEffect } from "react";
import { Control, useForm } from "react-hook-form";

interface Props {
  type: "create" | "edit";
  onFinish?: (data: SupplierSchemaType) => void;
  data?: SupplierSchemaType;
}

export default function SupplierForm(props: Props) {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierSchemaType>({
    resolver: zodResolver(supplierSchema),
  });

  const onFinish = (data: SupplierSchemaType) => {
    props.onFinish?.(data);
  };

  useEffect(() => {
    if (props.data) {
      setValue("name", props.data.name);
      setValue("email", props.data.email);
      setValue("phone", props.data.phone);
      setValue("address", props.data.address);
      setValue("subdistrict", props.data.subdistrict);
      setValue("district", props.data.district);
      setValue("province", props.data.province);
      setValue("postal_code", props.data.postal_code);
    }
  }, [props.data, setValue]);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFinish)}>
      <div className="flex items-baseline gap-3">
        <ControlledInputText
          control={control}
          name="name"
          props={{
            label: "ชื่อ",
            placeholder: "กรอกชื่อ",
            withAsterisk: true,
          }}
        />
        <ControlledInputText
          control={control}
          name="email"
          props={{
            label: "อีเมล",
            placeholder: "กรอกอีเมล",
            withAsterisk: true,
          }}
        />
        <ControlledInputBase
          control={control}
          name="phone"
          props={{
            label: "เบอร์โทรติดต่อ",
            placeholder: "กรอกเบอร์โทรติดต่อ",
            withAsterisk: true,
          }}
          mask="000-000-0000"
        />
      </div>
      <ControlledThailandAddress
        control={control as unknown as Control<AddressSchemaType>}
      />
      <Button type="submit">
        {props.type === "create" ? "บันทึก" : "แก้ไข"}
      </Button>
    </form>
  );
}
