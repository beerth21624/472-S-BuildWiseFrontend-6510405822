import ControlledDatePicker from "@/components/Controlled/ControlledDatePicker";
import ControlledInputNumber from "@/components/Controlled/ControlledInputNumber";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledInputTextarea from "@/components/Controlled/ControlledInputTextarea";
import ControlledMultiSelect from "@/components/Controlled/ControlledMultiSelect";
import { contractSchema, type ContractSchemaType } from "@/schemas/document/contract/contract.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Button, Group, Input, InputLabel, Text } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface Props {
    type: "create" | "edit";
    onFinish?: (data: ContractSchemaType) => void;
    data?: ContractSchemaType;
}

export default function ContractForm(props: Props) {
    const {
        control,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<ContractSchemaType>({
        resolver: zodResolver(contractSchema),
    });

    const attachmentsFields = useFieldArray({
        name: "attachments",
        control,
    })

    const onFinish = (data: ContractSchemaType) => {
        console.log(data);
        props.onFinish?.(data);
    };

    useEffect(() => {
        if (props.data) {

        }
    }, [props.data, setValue]);

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFinish)}>
            <ControlledInputNumber
                control={control}
                name="area_size"
                props={{
                    label: "เนื้อที่",
                    placeholder: "กรอกเนื้อที่",
                    withAsterisk: true,
                    thousandSeparator: true,
                    rightSection: "ตร.ม.",
                    rightSectionWidth: 50,
                    description: "กรุณากรอกขนาดพื้นที่",
                }}
            />
            <div className="flex flex-col gap-2 ">
                <Input.Wrapper withAsterisk label="รูปแบบและรายการแนบท้ายสัญญา" />
                {attachmentsFields.fields.map((field, index) => (
                    <div key={field.id} className="flex gap-3 items-center">
                        <ControlledInputText
                            key={field.id}
                            control={control}
                            name={`attachments.${index}.value`}
                            props={{
                                placeholder: "กรอกรูปแบบและรายการแนบท้ายสัญญา",
                                withAsterisk: true,
                                leftSection: `${index + 1}.`,
                            }}
                        />
                        <ActionIcon color="red" variant="light" onClick={() => attachmentsFields.remove(index)}>
                            <IconTrash size={20} />
                        </ActionIcon>
                    </div>
                ))}
                <div className="flex">
                    <ActionIcon variant="light" onClick={() => attachmentsFields.append({ value: "" })}>
                        <IconPlus size={20} />
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-2 max-w-xl">
                <Input.Wrapper withAsterisk label="ราคา" />
                {attachmentsFields.fields.map((field, index) => (
                    <div key={field.id} className="flex gap-3 items-center">

                        <ActionIcon variant="light" onClick={() => attachmentsFields.remove(index)}>
                            <IconTrash size={20} />
                        </ActionIcon>
                    </div>
                ))}
                <div className="flex">
                    <ActionIcon variant="light" onClick={() => attachmentsFields.append({ value: "" })}>
                        <IconPlus size={20} />
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col">
                <Input.Wrapper withAsterisk label="3. กำหนดเวลาแล้วเสร็จ" />
                <Group wrap="nowrap">
                    <ControlledDatePicker
                        control={control}
                        name="start_date"
                        props={{
                            label: "วันที่เริ่มต้นสัญญา",
                            placeholder: "ระบุวันที่เริ่มต้นสัญญา",
                            withAsterisk: true,
                            className: "w-full"
                        }}
                    />
                    <ControlledDatePicker
                        control={control}
                        name="end_date"
                        props={{
                            label: "วันที่สิ้นสุดสัญญา",
                            placeholder: "ระบุวันที่สิ้นสุดสัญญา",
                            withAsterisk: true,
                            className: "w-full"
                        }}
                    />
                </Group>
            </div>
            <Group wrap="nowrap">
                <ControlledInputNumber
                    control={control}
                    name="validate_within"
                    props={{
                        label: "4. ระยะเวลาในการตรวจรับมอบงาน (วัน)",
                        description: "ระบุจำนวนวันให้ผู้ว่าจ้างหรือตัวแทนตรวจรับมอบงาน นับแต่วันที่ผู้รับจ้างได้มีหนังสือเป็นลายลักษณ์อักษรแจ้งให้ทราบ",
                        placeholder: "จำนวนวัน",
                        withAsterisk: true,
                        className: "w-full"
                    }}
                />
                <ControlledInputNumber
                    control={control}
                    name="pay_within"
                    props={{
                        label: "5. กำหนดระยะเวลาการชำระเงิน (วัน)",
                        description: "ระบุจำนวนวันในการชำระเงินค่าจ้างงวดงาน นับตั้งแต่วันที่ได้ตรวจรับมอบงาน",
                        placeholder: "จำนวนวัน",
                        withAsterisk: true,
                        className: "w-full"
                    }}
                />
            </Group>
            <Group wrap="nowrap">
                <ControlledInputNumber
                    control={control}
                    name="retention_money"
                    props={{
                        label: "6. จำนวนเงินประกันผลงาน (บาท)",
                        description: "ระบุจำนวนเงินประกันผลงาน",
                        placeholder: "จำนวนเงิน",
                        withAsterisk: true,
                        thousandSeparator: true,
                        className: "w-full"
                    }}
                />
                <ControlledInputNumber
                    control={control}
                    name="guarantee_within"
                    props={{
                        label: "7. ระยะเวลารับประกันผลงาน (วัน)",
                        description: "ระบุจำนวนวันในการรับประกันผลงาน หลังจากงานแล้วเสร็จ",
                        placeholder: "จำนวนวัน",
                        withAsterisk: true,
                        className: "w-full"
                    }}
                />
            </Group>


            <ControlledInputTextarea
                control={control}
                name="amendment"
                props={{
                    label: "8. งานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน",
                    description: "ระบุรายละเอียดเกี่ยวกับงานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน ตามข้อตกลง",
                    placeholder: "รายละเอียดงานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน",
                    withAsterisk: true,
                    className: "w-full"
                }}
            />
            <ControlledInputTextarea
                control={control}
                name="termination_of_contract"
                props={{
                    label: "9. เหตุผลในการบอกเลิกสัญญา",
                    description: "โปรดระบุเหตุผลในการบอกเลิกสัญญา",
                    placeholder: "ระบุเหตุผล...",
                    withAsterisk: true,
                    className: "w-full"
                }}
            />
            <ControlledInputTextarea
                control={control}
                name="end_of_contract"
                props={{
                    label: "10. เงื่อนไขการสิ้นสุดสัญญา",
                    description: "ระบุเงื่อนไขที่ทำให้สัญญาสิ้นสุดลง",
                    placeholder: "เช่น เมื่อครบกำหนดระยะเวลาประกันผลงาน",
                    withAsterisk: true,
                    className: "w-full"
                }}
            />
            <ControlledInputTextarea
                control={control}
                name="breach_of_contract"
                props={{
                    label: "11. การผิดสัญญา",
                    description: "ระบุเงื่อนไขและผลของการผิดสัญญา",
                    placeholder: "เช่น หากฝ่ายใดฝ่ายหนึ่งผิดสัญญาข้อใดข้อหนึ่ง",
                    withAsterisk: true,
                    className: "w-full"
                }}
            />
            <ControlledInputTextarea
                control={control}
                name="force_majeure"
                props={{
                    label: "12. เหตุสุดวิสัย",
                    description: "ระบุเหตุการณ์ที่ถือเป็นเหตุสุดวิสัยและผลกระทบต่อสัญญา",
                    placeholder: "เช่น ภัยธรรมชาติ, การระบาดของโรค",
                    withAsterisk: true,
                    className: "w-full"
                }}
            />
            <div>
                <Button type="submit">
                    {props.type === "create" ? "สร้าง" : "บันทึก"}
                </Button>
            </div>
        </form>
    );
}
