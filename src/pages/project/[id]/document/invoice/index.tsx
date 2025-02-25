/* eslint-disable @typescript-eslint/no-unsafe-argument */
import BackButton from "@/components/BackButton/BackButton";
import useGetCompanyByUser from "@/hooks/queries/company/useGetCompanyByUser";
import useGetContractByProject from "@/hooks/queries/contract/useGetContractByProject";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Badge, Box, Button, Divider, LoadingOverlay, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import _ from "lodash";
import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { getContractStatusMap } from "@/utils/contractStatusMap";
import useChangeStatusContract from "@/hooks/mutates/contract/useChangeStatusContract";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import InvoicePdfView from "@/components/Document/Invoice/InvoicePdfView";

export default function Contract(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
    const { data: session } = useSession();
    const getProject = useGetProject({ id: props.id ?? "" });
    const getCompanyByUser = useGetCompanyByUser({ user_id: session?.user?.id ?? "" });

    return (
        <div className="flex flex-col">
            <BackButton label="กลับไปหน้าเอกสาร" />
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="text-xl font-bold">
                        <div className="flex items-center gap-2">
                            ใบแจ้งหนี้
                            <Badge variant="dot">
                                ฟหกด
                            </Badge>
                        </div>
                    </div>
                    <Text size="md" fw={700}>
                        {getProject.data?.data.name}
                    </Text>
                </div>
                <div className="flex gap-2">
                    <a
                        target="_blank"
                        href={`/api/report/document/invoice/${props.id}?user_id=${session?.user.id}`}
                    >
                        <Button
                            variant="default"
                            leftSection={<IconFileText size={15} />}
                        >
                            Export
                        </Button>
                    </a>
                    <Link href={`/project/${props.id}/document/invoice/edit`}>
                        <Button>
                            แก้ไข
                        </Button>
                    </Link>
                    <Button>
                        เปลี่ยนสถานะ
                    </Button>
                </div>
            </div>
            <Divider my={"md"} />
            <Box pos="relative">
                <LoadingOverlay loaderProps={{ children: 'Loading...' }} />
                {(getProject.data?.data && getCompanyByUser.data?.data) ? <InvoicePdfView
                    isPrintMode={false}
                    project={getProject.data?.data}
                    company={getCompanyByUser.data?.data}
                /> : <div className="flex justify-center">
                    <Text size="xl">ไม่พบข้อมูลใบแจ้งหนี้</Text>
                </div>}
            </Box>
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
