import { type GetCompanyByUserResponse } from "@/services/company/getCompanyByUser.service";
import { type GetContractByProjectResponse } from "@/services/contract/getContractByProject.service";
import { type GetProjectResponse } from "@/services/project/getProject.service";
import { Grid, Group, NumberFormatter, Stack, Table } from "@mantine/core";
import { bahttext } from "bahttext";
import clsx from "clsx";
import { addDays, differenceInDays, format, parseISO } from "date-fns";
import { th } from "date-fns/locale";
import dayjs from "dayjs";
import buddhistEra from 'dayjs/plugin/buddhistEra'
import _ from "lodash";

dayjs.extend(buddhistEra);

interface Props {
    isPrintMode: boolean;
    // data: GetContractByProjectResponse
    project: GetProjectResponse
    company: GetCompanyByUserResponse
}

export default function InvoicePdfView(props: Props) {
    return (
        <div className="text-[14px]">
            <Group justify="space-between" align="self-start" mt={5}>
                <Group>
                    <Stack gap={0}>
                        <div className="text-xl font-bold">{props.company.name}</div>
                        <div>{[props.company.address.address, props.company.address.subdistrict, props.company.address.district, props.company.address.province, props.company.address.postal_code].filter(Boolean).join(', ')}</div>
                        <div>เลขประจำตัวผู้เสียภาษี: <span className="font-medium">{props.company.tax_id}</span></div>
                        <div>โทรศัพท์: <span className="font-medium">{props.company.tel}</span></div>
                        <div>อีเมล: <span className="font-medium">{props.company.email}</span></div>
                    </Stack>
                </Group>
                <Group>
                    <Stack gap={0} align="flex-end">
                        <div className="text-4xl font-bold">ใบแจ้งหนี้</div>
                        <div><span className="font-medium">{props.project.id}</span></div>
                    </Stack>
                </Group>
            </Group>
            <Group justify="space-between" mt={10}>
                <Group>
                    <Stack gap={0}>
                        <div className="text-xl font-bold text-zinc-400">ลูกค้า</div>
                        <div className="text-xl font-bold">{props.project.client.name}</div>
                        <div>{[props.project.client.address.address, props.project.client.address.subdistrict, props.project.client.address.district, props.project.client.address.province, props.project.client.address.postal_code].filter(Boolean).join(', ')}</div>
                        <div>โทรศัพท์: <span className="font-medium">{props.project.client.tel}</span></div>
                        <div>อีเมล: <span className="font-medium">{props.project.client.email}</span></div>
                    </Stack>
                </Group>
                <Group>
                    <div className="grid grid-cols-2 gap-x-2 ">
                        <div className="text-end">งวดงาน:</div>
                        <div className="font-medium text-end">005</div>

                        <div className="text-end">วันที่:</div>
                        <div className="font-medium text-end">{dayjs().format("DD/MM/BBBB")}</div>

                        <div className="text-end">วันครบกําหนด:</div>
                        <div className="font-medium text-end">{dayjs().format("DD/MM/BBBB")}</div>

                        <div className="text-end">วันที่รับเงิน:</div>
                        <div className="font-medium text-end">{dayjs().format("DD/MM/BBBB")}</div>
                    </div>
                </Group>
            </Group>
            <Table withTableBorder withColumnBorders withRowBorders mt={15}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th w={200}>
                            <div className="text-center">รายการ</div>
                        </Table.Th>
                        <Table.Th colSpan={2} >คำอธิบายรายการเพิ่มเติม</Table.Th>
                        <Table.Th w={200} align="center">
                            <div className="text-center">จำนวนเงิน</div>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>งวดงาน</Table.Td>
                        <Table.Td colSpan={2}>งวดที่ 5</Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(400_000).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>ค่าดำเนินงานและกำไร</Table.Td>
                        <Table.Td colSpan={2}></Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>หักเงินมัดจำ</Table.Td>
                        <Table.Td colSpan={2}></Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td>หักเงินประกันผลงาน </Table.Td>
                        <Table.Td colSpan={2}></Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td align="right" colSpan={3}>
                            <div>รวมเป็นเงิน</div>
                        </Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td align="right" colSpan={3}>
                            <div>VAT 7%</div>
                        </Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td align="right" colSpan={3}>
                            <div>จำนวนเงินรวมทั้งสิ้น</div>
                        </Table.Td>
                        <Table.Td align="right"><NumberFormatter value={Number(0).toFixed(2)} thousandSeparator decimalScale={2} /></Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
            <Group gap={3} mt={10}>
                <div className="font-bold">เงื่อนไขการชำระเงิน:</div>
                <div>asdfsdf</div>
            </Group>
            <Group justify="start" mt={20}>
                <Stack gap={0}>
                    <div className="font-bold">สรุปการเบิกงวดงาน</div>
                    <div className="grid grid-cols-2 gap-x-2 ">
                        <div className="text-start">รวมเบิกถึงงวดก่อนหน้า:</div>
                        <div className="font-medium text-end">005</div>

                        <div className="text-start">เบิกงวดนี้:</div>
                        <div className="font-medium text-end">01/09/2566</div>

                        <div className="text-start">รวมเบิกแล้ว:</div>
                        <div className="font-medium text-end">01/08/2567</div>

                        <div className="text-start">คงเหลือสุทธิ:</div>
                        <div className="font-medium text-end">01/08/2567</div>
                    </div>
                </Stack>
            </Group>
            {props.isPrintMode && <Group justify="end" mt={20}>
                <Group gap={50}>
                    <Stack align="center" gap={2}>
                        <div>..............................................</div>
                        <div>(..............................................)</div>
                        <div>ผู้รับวางบิล</div>
                        <div>{dayjs().format("DD/MM/BBBB")}</div>
                    </Stack>
                    <Stack align="center" gap={2}>
                        <div>..............................................</div>
                        <div>{props.company.name}</div>
                        <div>ผู้วางบิล</div>
                        <div>{dayjs().format("DD/MM/BBBB")}</div>
                    </Stack>
                </Group>
            </Group>}

        </div>
    )
}