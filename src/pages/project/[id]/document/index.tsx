import BackButton from "@/components/BackButton/BackButton";
import useGetContractByProject from "@/hooks/queries/contract/useGetContractByProject";
import useGetProject from "@/hooks/queries/project/useGetProject";
import useGetQuotationByProject from "@/hooks/queries/quotation/useGetQuotationByProject";
import {
    Button,
    Text,
} from "@mantine/core";
import { IconContract, IconReceipt } from "@tabler/icons-react";
import {
    type GetServerSidePropsContext,
    type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

export default function Document(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
    const getProject = useGetProject({ id: props.id ?? "" });
    const getQuotationByProject = useGetQuotationByProject({ project_id: props.id ?? "" });
    const getContractByProject = useGetContractByProject({ project_id: props.id ?? "" });

    const quotationStatus = getQuotationByProject.data?.data.status;
    const contractStatus = getContractByProject.data?.status

    const isContractAvailable = quotationStatus === "approved" && contractStatus !== "approved";

    return (
        <>
            <div className="flex flex-col">
                <BackButton label="ย้อนกลับไปหน้ารายละเอียดโครงการ" />
                <div className="flex flex-col">
                    <div className="text-xl font-bold">
                        <div className="flex items-center gap-2">
                            เอกสาร
                        </div>
                    </div>
                    <Text size="md" fw={700}>
                        {getProject.data?.data.name}
                    </Text>
                </div>
                <div className="flex gap-5 mt-3">
                    {isContractAvailable ? <Link href={`/project/${props.id}/document/contract`}>
                        <Button leftSection={<IconContract />} variant="outline" size="xl">สัญญา</Button>
                    </Link> : <Button leftSection={<IconContract />} variant="outline" size="xl" disabled>สัญญา</Button>}

                    <Link href={`/project/${props.id}/document/invoice`}>
                        <Button leftSection={<IconReceipt />} variant="outline" size="xl">ใบแจ้งหนี้</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            id: context.query.id?.toString(),
        },
    };
}
