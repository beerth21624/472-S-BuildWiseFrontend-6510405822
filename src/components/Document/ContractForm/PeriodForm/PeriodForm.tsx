import ControlledInputNumber from "@/components/Controlled/ControlledInputNumber";
import ControlledSelect from "@/components/Controlled/ControlledSelect";
import { type ContractSchemaType } from "@/schemas/document/contract/contract.schema"
import { ActionIcon } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { type Control, type Path, useFieldArray, useFormContext } from "react-hook-form"

interface Props {
    control: Control<ContractSchemaType>
    name: string
}

export default function PeriodForm(props: Props) {
    const { control } = props;
    const { fields, append, remove } = useFieldArray({
        control,
        name: props.name as unknown as never,
    });
    return (
        <div className="flex flex-col gap-2">
            {fields.map((field, index) => (
                <div className="flex flex-col" key={field.id}>
                    <div className="flex gap-2 items-baseline">
                        <ControlledSelect
                            control={control}
                            name={`${props.name}[${index}].job_id` as unknown as Path<ContractSchemaType>}
                            props={{
                                placeholder: "เลือกงาน",
                                className: "w-full",
                                leftSection: `${index + 1}.`,
                                searchable: true,
                                data: [
                                    { value: "1", label: "งาน 1" },
                                    { value: "2", label: "งาน 2" },
                                    { value: "3", label: "งาน 3" },
                                ]
                            }}
                        />
                        <ControlledInputNumber
                            control={control}
                            name={`${props.name}[${index}].job_amount` as unknown as Path<ContractSchemaType>}
                            props={{
                                placeholder: "จำนวนงาน"
                            }}
                        />
                       <ActionIcon variant="light" color="red" onClick={() => remove(index)}>
                            <IconTrash size={20} />
                        </ActionIcon>
                    </div>
                </div>
            ))}
            <ActionIcon variant="light" onClick={() => append({
                job_id: undefined,
                job_amount: undefined
            })}>
                <IconPlus size={20} />
            </ActionIcon>
        </div>
    )
}