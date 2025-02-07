import BackButton from "@/components/BackButton/BackButton";
import useGetProject from "@/hooks/queries/project/useGetProject";
import { Button, Divider, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import _ from "lodash";
import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import ContractForm from "@/components/Document/ContractForm/ContractForm";
import Link from "next/link";

export default function ContractEdit(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
    const { data: session } = useSession();
    const getProject = useGetProject({ id: props.id ?? "" });

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
            <ContractForm type="edit" data={undefined} />
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
