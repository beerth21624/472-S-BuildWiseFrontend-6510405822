import BackButton from "@/components/BackButton/BackButton";
import useGetCompanyByUser from "@/hooks/queries/company/useGetCompanyByUser";
import useGetContractByProject from "@/hooks/queries/contract/useGetContractByProject";
import { bahttext } from "bahttext"
import useGetProject from "@/hooks/queries/project/useGetProject";
import useGetQuotationByProject from "@/hooks/queries/quotation/useGetQuotationByProject";
import { Badge, Button, Divider, Text } from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import { format, parse, parseISO } from "date-fns";
import _ from "lodash";
import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ContractPdfView from "@/components/Document/ContractForm/ContractPdfView";

export default function Contract(
    props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
    const { data: session } = useSession();
    const getProject = useGetProject({ id: props.id ?? "" });
    const getCompanyByUser = useGetCompanyByUser({ user_id: session?.user?.id ?? "" });

    const getQuotationByProject = useGetQuotationByProject({
        project_id: props.id ?? "",
    });

    const FinalPrice = () => {
        const total_selling_price = _.sumBy(
            getQuotationByProject.data?.data.jobs,
            (o) => o.total_selling_price,
        );

        const selling_general_cost =
            getQuotationByProject.data?.data.selling_general_cost ?? 0;

        const tax_percentage = getQuotationByProject.data?.data.tax_percentage ?? 0;

        const tax_amount =
            (selling_general_cost + total_selling_price) * (tax_percentage / 100);
        const total_price = selling_general_cost + total_selling_price;

        return tax_amount + total_price;
    };

    return (
        <div className="flex flex-col">
            <BackButton label="กลับไปหน้าเอกสาร" />
            {/* <Text fz={"xl"} fw={700}>
                สัญญา
            </Text>
            <Text size="md" fw={700}>
                {getProject.data?.data.name}
            </Text> */}
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="text-xl font-bold">
                        <div className="flex items-center gap-2">
                            สัญญา{" "}
                            <Badge variant="dot">
                                แบบร่าง
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
                        href={`/pdf/document/contract/${props.id}`}
                    >
                        <Button
                            variant="default"
                            leftSection={<IconFileText size={15} />}
                        >
                            Export
                        </Button>
                    </a>
                    <Link href={`/project/${props.id}/document/contract/edit`}>
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
            {/* <div className="flex flex-col gap-5">
                <div>
                    <Text fw="bold">ข้อมูลทั่วไป</Text>
                    <div className="flex gap-10">
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <Text w={110}>ชื่อสัญญา :</Text>
                                <Text fw="bold">{getProject.data?.data.name}</Text>
                            </div>
                            <div className="flex gap-2">
                                <Text w={110}>วันที่ทำสัญญา :</Text>
                                {getProject.data?.data.created_at && <Text fw="bold">{format(parseISO(getProject.data?.data.created_at), "dd/MM/yyyy")}</Text>}

                            </div>
                            <div className="flex gap-2">
                                <Text w={110}>ข้อมูลผู้ว่าจ้าง :</Text>
                                <Text fw="bold">{getProject.data?.data.client.name}, {getProject.data?.data.client.address.subdistrict}, {getProject.data?.data.client.address.district}, {getProject.data?.data.client.address.province}, {getProject.data?.data.client.address.postal_code}</Text>
                            </div>
                            <div className="flex gap-2">
                                <Text w={110}>ข้อมูลผู้รับจ้าง :</Text>
                                <Text fw="bold">{getCompanyByUser.data?.data.name}, {getCompanyByUser.data?.data.address.subdistrict}, {getCompanyByUser.data?.data.address.district}, {getCompanyByUser.data?.data.address.province}, {getCompanyByUser.data?.data.address.postal_code}</Text>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <Text fw="bold">1. ขอบเขตลักษณะงาน</Text>
                        <div className="flex gap-2">
                            <Text w={100}>ลักษณะงาน :</Text>
                            <Text fw="bold">{getProject.data?.data.description}</Text>
                        </div>
                        <div className="flex gap-2">
                            <Text w={100}>เนื้อที่ :</Text>
                            <Text fw="bold">200 ตารางเมตร</Text>
                        </div>
                        <div className="flex gap-2">
                            <Text w={100}>ที่ตั้ง :</Text>
                            <Text fw="bold">{getProject.data?.data.address.address}, {getProject.data?.data.address.subdistrict}, {getProject.data?.data.address.district}, {getProject.data?.data.address.province}, {getProject.data?.data.address.postal_code}</Text>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Text fw="bold">รูปแบบและรายการแนบท้ายสัญญา</Text>
                        <ul className="list-disc ml-5">
                            <li>แบบสา หรับก่อสร้างตกแต่ง</li>
                            <li>ใบเสนอราคาปริมาณงานก่อสร้าง</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <Text fw="bold">2. ราคา</Text>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2">
                                <Text w={125}>จำนวนเงินทั้งหมด :</Text>
                                <Text fw="bold">{FinalPrice().toLocaleString("th-TH")} บาท ({bahttext(FinalPrice())})</Text>
                            </div>
                            <div className="pl-10">
                                <div>
                                    <div className="flex gap-2">
                                        <Text fw="bold">งวดแรก: </Text>
                                        <Text >{Number(130_000).toLocaleString("th-TH")} บาท ({bahttext(130_000)})</Text>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-2">
                                        <Text fw="bold">งวดที่ 2: </Text>
                                        <Text >{Number(130_000).toLocaleString("th-TH")} บาท ({bahttext(130_000)})</Text>
                                        <Text fw="bold">*ส่งมอบงานภายใน {format(parseISO(new Date().toISOString()), "dd/MM/yyyy")}</Text>
                                    </div>
                                    <ul className="list-disc ml-5">
                                        <li>แบบสา หรับก่อสร้างตกแต่ง</li>
                                        <li>ใบเสนอราคาปริมาณงานก่อสร้าง</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex gap-2">
                                        <Text fw="bold">งวดที่ 3: </Text>
                                        <Text >{Number(130_000).toLocaleString("th-TH")} บาท ({bahttext(130_000)})</Text>
                                        <Text fw="bold">*ส่งมอบงานภายใน {format(parseISO(new Date().toISOString()), "dd/MM/yyyy")}</Text>
                                    </div>
                                    <ul className="list-disc ml-5">
                                        <li>แบบสา หรับก่อสร้างตกแต่ง</li>
                                        <li>ใบเสนอราคาปริมาณงานก่อสร้าง</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">3. กำหนดเวลาแล้วเสร็จ</Text>
                    <div className="flex gap-2">
                        <Text w={100}>จำนวนวัน :</Text>
                        <Text fw="bold">10</Text>
                    </div>
                    {getProject.data?.data.created_at && <><div className="flex gap-2">
                        <Text w={100}>วันเริ่ม :</Text>
                        <Text fw="bold">{format(parseISO(getProject.data?.data.created_at ?? ""), "dd/MM/yyyy")}</Text>
                    </div>
                        <div className="flex gap-2">
                            <Text w={100}>วันเสร็จ :</Text>
                            <Text fw="bold">{format(parseISO(getProject.data?.data.created_at ?? ""), "dd/MM/yyyy")}</Text>
                        </div></>}

                </div>
                <div className="flex flex-col">
                    <Text fw="bold">4. การส่งมอบงานและการตรวจรับงาน</Text>
                    <div className="flex gap-2">
                        <Text w={100}>จำนวนวัน :</Text>
                        <Text fw="bold">10 วัน</Text>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">5. กำหนดเวลาชำระเงิน</Text>
                    <div className="flex gap-2">
                        <Text w={100}>จำนวนวัน :</Text>
                        <Text fw="bold">10 วัน</Text>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">6. เงินประกันผลงาน</Text>
                    <div className="flex gap-2">
                        <Text w={100}>จำนวนเงิน :</Text>
                        <Text fw="bold">{100} บาท ({bahttext(100)})</Text>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">7. การรับประกันผลงาน</Text>
                    <div className="flex gap-2">
                        <Text w={100}>จำนวนวัน :</Text>
                        <Text fw="bold">{100} วัน</Text>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">8. งานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน</Text>
                    <Text>หากผู้ว่าจ้างต้องการให้ผู้รับจ้าง แก้ไข หรือเพิ่มเติม หรือเปลี่ยนแปลงการก่อสร้างส่วนใดส่วนหนึ่งหรือให้ผู้รับจ้างทำงานพิเศษที่มิได้แสดงไว้หรือรวมอยู่ในสัญญาฉบับนี้ ผู้ว่าจ้างต้องแจ้งเป็นลายลักษณ์อักษรให้แก่ผู้รับจ้างทราบล่วงหน้าก่อนไม่น้อยกว่า 7 วัน และให้ทั้งสองฝ่ายทำการตกลงกันเพื่อกำหนด อัตราค่าจ้างหรือราคา รวมทั้งการขยายระยะเวลา (ถ้ามี) กันใหม่เพื่อความเหมาะสม ทั้งนี้ การแก้ไขหรือการเปลี่ยนแปลง หรืองานพิเศษนั้นจะต้องไม่กระทบต่องานก่อสร้างตกแต่งที่ได้ทำไปแล้ว</Text>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">9. การบอกเลิกสัญญา</Text>
                    <Text>ผู้ว่าจ้างสามารถบอกเลิกสัญญาโดยแจ้งให้แก่ผู้รับจ้างทราบเป็นลายลักษณ์อักษร โดยผู้รับจ้างมีสิทธิในการเรียกร้องค่าจ้างตามงานที่สำเร็จกับผู้ว่าจ้างได้</Text>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">10. การสิ้นสุดแห่งสัญญา</Text>
                    <Text>เมื่อครบกำหนดระยะเวลาประกันผลงาน และผู้ว่าจ้างได้คืนเงินประกันผลงานให้แก่ผู้รับจ้างครบถ้วนแล้ว ให้ถือว่าสัญญาฉบับนี้สิ้นสุดลง</Text>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">11. การผิดสัญญา</Text>
                    <Text>หากฝ่ายใดฝ่ายหนึ่งผิดสัญญญาข้อใดข้อหนึ่ง อีกฝ่ายหนึ่งมีสิทธิ์บอกเลิกสัญญาและเรียกค่าเสียหายเป็นเงินจำนวนไม่เกินกว่าราคาค่าจ้างตามสัญญาฉบับนี้จากฝ่ายที่ผิดสัญญาได้ โดยแจ้งเป็นลายลักษณ์อักษรให้อีกฝ่ายหนึ่งทราบ ทั้งนี้ การที่อีกฝ่ายหนึ่งไม่ใช้สิทธิ์ในการบอกเลิกสัญญาในครั้งใด ไม่ถือเป็นการสละสิทธิ์ในการบอกเลิกสัญญาและเรียกร้องค่าเสียหายในครั้งต่อไป</Text>
                </div>
                <div className="flex flex-col">
                    <Text fw="bold">12. เหตุสุดวิสัย</Text>
                    <Text>กรณีคู่สัญญาฝ่ายใดฝ่ายหนึ่งไม่อาจปฏิบัติตามข้อตกลงข้อใดข้อหนึ่งในสัญญาฉบับนี้ได้ เนื่องมาจากสาเหตุที่อยู่เหนือการควบคุมของคู่สัญญาฝ่ายนั้น ไม่ถือเป็นการผิดสัญญา หากคู่สัญญาฝ่ายนั้นได้ใช้ความพยายามอย่างสูงสุดในการหลีกเลี่ยงหรือขจัดสาเหตุดังกล่าวให้หมดไป และได้แจ้งสาเหตุดังกล่าวให้แก่คู่สัญญาอีกฝ่ายทราบโดยไม่ชักช้า ทั้งนี้คู่สัญญาฝ่ายดังกล่าวจะต้องปฏิบัติตามข้อตกลงดังกล่าว ทันทีเมื่อสาเหตุดังกล่าวถูกขจัดให้หมดสิ้นไป</Text>
                </div>
            </div> */}
           <ContractPdfView isPrintMode={false} />
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
