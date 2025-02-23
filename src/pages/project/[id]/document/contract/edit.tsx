import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Divider, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import _ from "lodash";
import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import ContractForm from "@/components/Document/ContractForm/ContractForm";
import Link from "next/link";
import useGetCompanyByUser from "@/hooks/queries/company/useGetCompanyByUser";
import useGetContractByProject from "@/hooks/queries/contract/useGetContractByProject";
import { parseISO } from "date-fns";
import { ContractSchemaType } from "@/schemas/document/contract/contract.schema";
import useEditContract from "@/hooks/mutates/contract/useEditContract";
import { notifications } from "@mantine/notifications";

export default function ContractEdit(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
    const { data: session } = useSession();
    const getProject = useGetProject({ id: props.id ?? "" });
    const getCompanyByUser = useGetCompanyByUser({ user_id: session?.user?.id ?? "" });
    const getContractByProject = useGetContractByProject({ project_id: props.id ?? "" });
    const editContract = useEditContract();

    const onSave = (data: ContractSchemaType) => {
        editContract.mutate({
            ...data,
            project_id: props.id ?? "",
            format: data.format.map((value) => value.value),
            start_date: data.start_date.toISOString(),
            end_date: data.end_date.toISOString(),
            periods: data.periods.map((period, index) => ({
                ...period,
                period_number: index + 1,
                delivered_within: period.delivered_within ?? 0,
                amount_period: period.amount_period ?? 0,
                jobs: (period.jobs?.map((job) => ({
                    job_id: job.job_id,
                    job_amount: job.job_amount,
                })) ?? []),
            })),
        }, {
            onSuccess: () => {
                getContractByProject.refetch();
                notifications.show({
                    title: "สําเร็จ",
                    message: "แก้ไขสัญญาสําเร็จ",
                    color: "green",
                });
            },
            onError: (error) => {
                notifications.show({
                    title: "เกิดข้อผิดพลาด",
                    message: error.message,
                    color: "red",
                });
            },
        })
    }

    return (
        <div className="flex flex-col">
            <BackButton label="กลับไปหน้ารายละเอียดสัญญา" />
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="text-xl font-bold">
                        <div className="flex items-center gap-2">
                            แก้ไขสัญญา
                        </div>
                    </div>
                    <Text size="md" fw={700}>
                        {getProject.data?.data.name}
                    </Text>
                </div>
                <div className="flex gap-2">
                </div>
            </div>
            <Divider my={"md"} />
            <ContractForm
                type="edit"
                data={getContractByProject.data ? {
                    ...getContractByProject.data,
                    format: (getContractByProject.data.format?.map((value: string) => ({ value })) ?? []),
                    start_date: parseISO(getContractByProject.data.start_date),
                    end_date: parseISO(getContractByProject.data.end_date)
                } : undefined}
                onFinish={onSave}
            />
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            id: context.query.id?.toString(),
        },
    };
}
