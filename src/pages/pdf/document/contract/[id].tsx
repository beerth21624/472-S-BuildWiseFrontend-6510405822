import ContractPdfView from "@/components/Document/ContractForm/ContractPdfView";
import { Text } from "@mantine/core";
import _ from "lodash";
import {
    type GetServerSidePropsContext,
    type InferGetServerSidePropsType,
} from "next";

function LabelSection({ children, prefix, suffix }: { children: React.ReactNode | string; prefix?: React.ReactNode | string | undefined; suffix?: React.ReactNode | string | undefined }) {
    return (
        <div className="flex gap-2 items-center">
            {prefix && typeof prefix === "string" ? <Text>{prefix}</Text> : prefix}
            {typeof children === "string" ? <Text fw="bold">{children}</Text> : children}
            {suffix && typeof suffix === "string" ? <Text>{suffix}</Text> : suffix}
        </div>
    )
}

export default function Contract(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {

    return (
        <ContractPdfView isPrintMode={true} />
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            //   id: context.query.id?.toString(),
            //   user_id: context.query.user_id?.toString(),
        },
    };
}
