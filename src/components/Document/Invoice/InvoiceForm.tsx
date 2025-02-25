import ControlledDatePicker from "@/components/Controlled/ControlledDatePicker";
import ControlledInputNumber from "@/components/Controlled/ControlledInputNumber";
import ControlledInputText from "@/components/Controlled/ControlledInputText";
import ControlledInputTextarea from "@/components/Controlled/ControlledInputTextarea";
import { contractSchema, type ContractSchemaType } from "@/schemas/document/contract/contract.schema";
import { invoiceSchema, InvoiceSchemaType } from "@/schemas/document/invoice/invoice.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionIcon, Button, Group, Input, Paper, Stack } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface Props {
    type: "create" | "edit";
    onFinish?: (data: InvoiceSchemaType) => void;
    data?: InvoiceSchemaType;
}

export default function InvoiceForm(props: Props) {
    const {
        control,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<InvoiceSchemaType>({
        resolver: zodResolver(invoiceSchema),
    });

    const onFinish = (data: InvoiceSchemaType) => {
        console.log(data);
        props.onFinish?.(data);
    };

    useEffect(() => {
        if (props.data) {

        }

    }, [props.data]);

    console.log(errors);


    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFinish)}>
            <ControlledInputTextarea
                control={control}
                name="paymentTerms"
                props={{
                    label: "เงื่อนไขการชำระเงิน",
                    placeholder: "กรุณาระบุเงื่อนไขการชำระเงิน",
                    withAsterisk: true,
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
