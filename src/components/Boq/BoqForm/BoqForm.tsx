import ControlledInputNumber from "@/components/Controlled/ControlledInputNumber";
import ControlledSelect from "@/components/Controlled/ControlledSelect";
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";
import { boqSchema, type BoqSchemaType } from "@/schemas/boq/boq.schema";
import {
  createBoqSchema,
  type CreateBoqSchemaType,
} from "@/schemas/boq/create-boq.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Button, Table } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconPlus } from "@tabler/icons-react";
import { useFieldArray, useForm } from "react-hook-form";

interface Props {
  type: "create" | "edit";
  onFinish?: (data: CreateBoqSchemaType) => void;
  data?: CreateBoqSchemaType;
}

export default function BoqForm(props: Props) {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBoqSchemaType>({
    resolver: zodResolver(createBoqSchema),
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "boq",
    },
  );

  const onFinish = (data: CreateBoqSchemaType) => {
    console.log(data);
    props.onFinish?.(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFinish)}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ชื่อ Job</Table.Th>
            <Table.Th>จำนวน</Table.Th>
            <Table.Th>ค่าแรง</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {fields.map((field, index) => (
            <Table.Tr key={field.id}>
              <Table.Td>
                <ControlledSelect
                  control={control}
                  name={`boq.${index}.jobId`}
                  props={{
                    placeholder: "เลือก Job",
                    data: ["Job 1", "Job 2", "Job 3"],
                    searchable: true,
                  }}
                />
              </Table.Td>
              <Table.Td>
                <ControlledInputNumber
                  control={control}
                  name={`boq.${index}.quantity`}
                  props={{
                    placeholder: "จํานวน",
                    thousandSeparator: true,
                  }}
                />
              </Table.Td>
              <Table.Td>
                <ControlledInputNumber
                  control={control}
                  props={{
                    placeholder: "ค่าแรง",
                    thousandSeparator: true,
                  }}
                  name={`boq.${index}.labor_cost`}
                />
              </Table.Td>
              <Table.Td>
                <Button
                  onClick={() => {
                    modals.openConfirmModal({
                      ...DeleteConfirmModalConfig,
                      children: <p>คุณต้องการลบรายการงานนี้ใช่หรือไม่</p>,
                      onConfirm: () => {
                        remove(index);
                      },
                    });
                  }}
                  variant="outline"
                  color="red"
                >
                  ลบ
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => prepend({ jobId: "", quantity: 0, labor_cost: 0 })}
          leftSection={
            <IconPlus />
          }
        >
          เพิ่มรายการงาน
        </Button>
      </div>
      <Button type="submit">บันทึก</Button>
    </form>
  );
}
