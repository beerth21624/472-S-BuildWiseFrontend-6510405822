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
        <div className="a4-vertical relative flex flex-col p-7 text-[14px]">
            <div className="flex justify-center">
                <Text size="xl" fw={700}>สัญญาว่าจ้างก่อสร้าง</Text>
            </div>
            <div className="flex gap-3 justify-center mt-5">
                <LabelSection prefix="เมื่อวันที่">
                    asdfsdfsadf
                </LabelSection>
                <LabelSection prefix="หนังสือสัญญาฉบับนี้ทำขึ้นที่">
                    บริษัท xxxxx จำกัด
                </LabelSection>
            </div>
            <div className="flex gap-3 justify-center">
                <LabelSection prefix="เลขที่">
                    888888888888
                </LabelSection>
                <LabelSection prefix="ระหว่าง" suffix="ทะเบียนนิติบุคคล">
                    888888888888
                </LabelSection>
            </div>
            <div className="flex gap-3 justify-center">
                <LabelSection prefix="เลขที่">
                    888888888888
                </LabelSection>
                <LabelSection prefix="ระหว่าง" suffix="ทะเบียนนิติบุคคล">
                    888888888888
                </LabelSection>
            </div>

            {/* <div className="flex">
                <Text>เมื่อวันที่</Text>
                <Text>31 มิถุนายน 2566</Text>
            </div>
            <div className="flex">
                <Text>หนังสือสัญญาฉบับนี้ทำขึ้นที่</Text>
                <Text>บริษัท xxxxx จำกัด</Text>
            </div> */}
            {/* <div className="flex justify-center">
                <Text>เลขที่ <span> asdfsdfsadf </span></Text>
                <Text>ระหว่าง 1215615615 ทะเบียนนิติบุคคล</Text>
            </div> */}
        </div>
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
