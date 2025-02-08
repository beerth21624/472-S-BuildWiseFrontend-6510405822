import clsx from "clsx";

interface Props {
    isPrintMode: boolean;
}

export default function ContractPdfView(props: Props) {
    return (
        <div className="text-[14px]">
            <h1 className={clsx("text-2xl font-bold mb-4", props.isPrintMode ? "text-center" : "text-start")}>สัญญาว่าจ้างก่อสร้าง</h1>
            <div className="grid grid-cols-1 gap-4">
                <div className={clsx(props.isPrintMode ? "text-center" : "text-start")}>
                    <span>เมื่อวันที่</span>
                    <span className="ml-2 font-semibold">23 มกราคม พ.ศ. 2568</span>
                    <span className="ml-4">หนังสือสัญญาฉบับนี้ทำขึ้นที่</span>
                </div>
                <div className="text-start">
                    <span className="font-semibold">บริษัท xxxxx จำกัด</span>
                    <span className="ml-2">เลขที่</span>
                    <span className="ml-2 font-semibold">XXXXXXX</span>
                    <span className="ml-2">ระหว่าง</span>
                    <span className="ml-2 font-semibold">23 มกราคม - 30 มกราคม พ.ศ. 2569</span>
                    <span className="ml-2">ทะเบียนนิติบุคคล เลขที่</span>
                    <span className="ml-2 font-semibold">XXXXXXX</span>
                    <span className="ml-2">ที่ตั้งเลขที่</span>
                    <span className="ml-2 font-semibold">XXXXXXX</span>
                    <span className="ml-2">ซึ่งต่อไปในสัญญานี้เรียกว่า “ผู้ว่าจ้าง” ฝ่ายหนึ่ง</span>
                </div>
                <div className="text-start">
                    <span>กับ</span>
                    <span className="ml-2 font-semibold">บริษัท ก. จำกัด</span>
                    <span className="ml-2">ทะเบียนนิติบุคคลเลขที่</span>
                    <span className="ml-2 font-semibold">XXXXXXX</span>
                    <span className="ml-2">ที่ตั้งเลขที่</span>
                    <span className="ml-2 font-semibold">XXXXXXX</span>
                    <span className="ml-2">ซึ่งต่อไปในสัญญานี้เรียกว่า</span>
                    <span className="ml-2">“ผู้รับจ้าง”</span>
                    <span className="ml-2">อีกฝ่ายหนึ่ง</span>
                </div>
                <div className="font-semibold">คู่สัญญาทั้งสองฝ่ายตกลงกันดังต่อไปนี้</div>
            </div>

            <div className="mt-4 text-start">
                <h2 className="text-xl font-bold">1. ขอบเขตและลักษณะของงาน</h2>
                <div>
                    <span>ผู้ว่าจ้าง ตกลงจ้าง ผู้รับจ้าง ให้ก่อสร้าง</span>
                    <span className="ml-2 font-semibold">XXXXX</span>
                    <span className="ml-2">เนื้อที่</span>
                    <span className="ml-2 font-semibold">XXXXX</span>
                    <span className="ml-2">ตารางเมตร</span>
                </div>
                <div>
                    <span>ที่ตั้งเลขที่</span>
                    <span className="ml-2 font-semibold">XXXXX</span>
                    <span className="ml-2">โดยทั้ง</span>
                </div>
                <div>สองฝ่ายตกลงกันว่ารูปแบบและรายการที่แนบท้ายสัญญาต่อไปนี้เป็นส่วนหนึ่งของสัญญา ได้แก่</div>
                <ol className="list-decimal list-inside pl-4">
                    <li>
                        <span className="font-semibold">แบบสำหรับก่อสร้างตกแต่ง</span>
                    </li>
                    <li>
                        <span className="font-semibold">ใบเสนอราคาปริมาณงานก่อสร้าง</span>
                    </li>
                </ol>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-bold">2. ราคา</h2>
                <div>
                    <span>ผู้ว่าจ้างตกลงจ่ายค่าจ้างแก่ผู้รับจ้าง ตามลักษณะของงานที่ได้ระบุไว้ในข้อ</span>
                    <span>1. เป็นจำนวนเงินทั้งหมด</span>
                    <span className="ml-2 font-semibold">300,000</span>
                    <span className="ml-1">บาท</span>
                    <span className="ml-1 font-semibold">(สามแสนบาททท้วน)</span>
                    <span className="ml-1">โดยแบ่งชำระเป็นงวดๆ ดังนี้</span>
                </div>
                <div>
                    <span className="font-semibold underline">งวดแรก</span>
                    <span className="ml-2">ผู้ว่าจ้างตกลงจ่ายเงินจำนวน</span>
                    <span className="ml-2 font-semibold">300,000</span>
                    <span className="ml-1">บาท</span>
                    <span className="ml-1 font-semibold">(สามแสนบาทถ้วน)</span>
                    <span className="ml-2">เป็นเงินมัดจำค่าดำเนินงานก่อสร้างตกแต่ง ซึ่งเป็นร้อยละ</span>
                    <span className="ml-2 font-semibold">100%</span>
                    <span className="ml-1"> ของค่าจ้างออกแบบทั้งหมด โดยผู้ว่าจ้างตกลงจ่ายในวันที่ทำสัญญาฉบับนี้</span>
                </div>
                <div>
                    <div>
                        <span className="font-semibold underline">งวดที่ 2</span>
                        <span className="ml-2">ผู้ว่าจ้างตกลงจ่ายเงินจำนวน</span>
                        <span className="ml-2 font-semibold">300,000</span>
                        <span className="ml-1">บาท</span>
                        <span className="ml-1 font-semibold">(สามแสนบาทถ้วน)</span>
                        <span className="ml-1" >โดยจ่ายให้เมื่อผู้รับจ้างดำเนินงานต่อไปนี้แล้วเสร็จ</span>
                    </div>
                    <ol className="list-decimal list-inside pl-4">
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                    </ol>
                    <div>
                        <span>โดยกำหนดการส่งมอบงานภายใน</span>
                        <span className="ml-2 font-semibold">20</span>
                        <span className="ml-1">วันนับแต่วันที่ทำสัญญาฉบับนี้</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="font-semibold underline">งวดที่ 3</span>
                        <span className="ml-2">ผู้ว่าจ้างตกลงจ่ายเงินจำนวน</span>
                        <span className="ml-2 font-semibold">300,000</span>
                        <span className="ml-1">บาท</span>
                        <span className="ml-1 font-semibold">(สามแสนบาทถ้วน)</span>
                        <span className="ml-1" >โดยจ่ายให้เมื่อผู้รับจ้างดำเนินงานต่อไปนี้แล้วเสร็จ</span>
                    </div>
                    <ol className="list-decimal list-inside pl-4">
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                    </ol>
                    <div>
                        <span>โดยกำหนดการส่งมอบงานภายใน</span>
                        <span className="ml-2 font-semibold">20</span>
                        <span className="ml-1">วันนับแต่วันที่ผู้รับจ้างได้รับค่างวดงานงวดที่ 2</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="font-semibold underline">งวดสุดท้าย</span>
                        <span className="ml-2">ผู้ว่าจ้างตกลงจ่ายเงินจำนวน</span>
                        <span className="ml-2 font-semibold">300,000</span>
                        <span className="ml-1">บาท</span>
                        <span className="ml-1 font-semibold">(สามแสนบาทถ้วน)</span>
                        <span className="ml-1" >โดยจ่ายให้เมื่อผู้รับจ้างดำเนินงานต่อไปนี้แล้วเสร็จ</span>
                    </div>
                    <ol className="list-decimal list-inside pl-4">
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                        <li>
                            <span className="font-semibold">งาน</span>
                        </li>
                    </ol>
                    <div>
                        <span>โดยกำหนดการส่งมอบงานภายใน</span>
                        <span className="ml-2 font-semibold">20</span>
                        <span className="ml-1">วันนับแต่วันที่ผู้รับจ้างได้รับค่างวดงานงวดที่ 3</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">3. กำหนดเวลาแล้วเสร็จ</h2>
                <div>
                    <span>ผู้รับจ้างให้สัญญาว่าจะดำเนินงานตามข้อ 1. ให้แล้วเสร็จภายในเวลา</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">วัน</span>
                    <span className="ml-1">นับจากวันที่</span>
                    <span className="ml-1 font-semibold">10</span>
                    <span className="ml-1">เดือน</span>
                    <span className="ml-1 font-semibold">กันยายน</span>
                    <span className="ml-1">พ.ศ.</span>
                    <span className="ml-1 font-semibold">2565</span>
                    <span className="ml-1">ถึง วันที่</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">เดือน</span>
                    <span className="ml-1 font-semibold">กันยายน</span>
                    <span className="ml-1">พ.ศ.</span>
                    <span className="ml-1 font-semibold">2565</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">4. การส่งมอบงานและการตรวจรับงาน</h2>
                <div>
                    <span>ผู้รับจ้างจะแจ้งให้ผู้ว่าจ้างทราบ โดยทำเป็นลายลักษณ์อักษรพร้อมรูปถ่ายประกอบ เพื่อให้ผู้ว่าจ้างหรือ ตัวแทนของผู้ว่าจ้างตรวจรับงวดงาน หากผู้ว่าจ้างหรือตัวแทนผู้ว่าจ้างไม่เข้าตรวจรับมอบงวดงานภายใน</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">วัน</span>
                    <span className="ml-1">นับแต่วันที่ผู้รับจ้างได้มีหนังสือเป็นลายลักษณ์อักษรแจ้งให้ทราบ ให้ถือว่าผู้ว่าจ้างได้รับ
                        มอบงวดงานเรียบร้อยแล้ว</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">5. กำหนดระยะเวลาการชำระเงิน</h2>
                <div>
                    <span>ผู้ว่าจ้างตกลงชำระเงินค่างวดงานภายใน</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">วัน</span>
                    <span className="ml-1">นับแต่วันที่ได้ตรวจรับมอบงวดงาน</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">6. เงินประกันผลงาน</h2>
                <div>
                    <span>ทั้งสองฝ่ายตกลงกำหนดเงินค่าประกันผลงานตามสัญญาข้อ 7. จำนวนทั้งหมด</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">บาท</span>
                    <span className="ml-1 font-semibold">(สิบบาทถ้วน)</span>
                    <span className="ml-1">โดยให้ผู้ว่าจ้างหักจากเงินค่างวดงานในแต่ละงวดเท่าๆกันจนครบตามจำนวน และหากผู้รับจ้างไม่ปฏิบัติตามสัญญาข้อ 7 ผู้รับจ้างยินยอมให้ผู้ว่าจ้างหักเงินประกันผลงานตามเพื่อชดใช้ความเสียหายที่เกิดขึ้นได้</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">7. การรับประกันผลงาน</h2>
                <div>
                    <span>เมื่องานแล้วเสร็จบริบูรณ์ และผู้ว่าจ้างได้รับมอบงานจ้างจากผู้รับจ้าง หากมีเหตุชำรุดบกพร่อง หรือเสียหายเกิดขึ้น ภายในกำหนด</span>
                    <span className="ml-1 font-semibold">20</span>
                    <span className="ml-1">วัน</span>
                    <span className="ml-1">วัน นับถัดจากวันที่ได้รับมอบงานดังกล่าว ซึ่งความชำรุดบกพร่องหรือเสียหายนั้นเกิดจากความบกพร่องในการก่อสร้างของผู้รับจ้างอันเกิดจากการใช้วัสดุที่ไม่ ถูกต้อง หรือทำไว้ไม่เรียบร้อย หรือทำไม่ถูกต้องตามมาตรฐานแห่งหลักวิชา ผู้รับจ้างจะต้องรีบทำการแก้ไขให้เป็นที่เรียบร้อยไม่ชักช้า โดยผู้ว่าจ้างไม่ต้องรับผิดชอบค่าใช้จ่ายใดๆ ในการนี้ทั้งสิ้น</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">8. งานพิเศษและการแก้ไข เพิ่มเติม เปลี่ยนแปลงงาน</h2>
                <div>
                    <span>หากผู้ว่าจ้างต้องการให้ผู้รับจ้าง แก้ไข หรือเพิ่มเติม หรือเปลี่ยนแปลงการก่อสร้างส่วนใดส่วนหนึ่งหรือให้ผู้รับจ้างทำงานพิเศษที่มิได้แสดงไว้หรือรวมอยู่ในสัญญาฉบับนี้ ผู้ว่าจ้างต้องแจ้งเป็นลายลักษณ์อักษรให้แก่ผู้รับจ้างทราบล่วงหน้าก่อนไม่น้อยกว่า 7 วัน และให้ทั้งสองฝ่ายทำการตกลงกันเพื่อกำหนด อัตราค่าจ้างหรือราคา รวมทั้งการขยายระยะเวลา (ถ้ามี) กันใหม่เพื่อความเหมาะสม ทั้งนี้ การแก้ไขหรือการเปลี่ยนแปลง หรืองานพิเศษนั้นจะต้องไม่กระทบต่องานก่อสร้างตกแต่งที่ได้ทำไปแล้ว</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">9. การบอกเลิกสัญญา</h2>
                <div>
                    <span>ผู้ว่าจ้างสามารถบอกเลิกสัญญาโดยแจ้งให้แก่ผู้รับจ้างทราบเป็นลายลักษณ์อักษร โดยผู้รับจ้างมีสิทธิในการเรียกร้องค่าจ้างตามงานที่สำเร็จกับผู้ว่าจ้างได้</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">10. การสิ้นสุดแห่งสัญญา</h2>
                <div>
                    <span>เมื่อครบกำหนดระยะเวลาประกันผลงาน และผู้ว่าจ้างได้คืนเงินประกันผลงานให้แก่ผู้รับจ้างครบถ้วนแล้ว ให้ถือว่าสัญญาฉบับนี้สิ้นสุดลง</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">11. การผิดสัญญา</h2>
                <div>
                    <span>หากฝ่ายใดฝ่ายหนึ่งผิดสัญญาข้อใดข้อหนึ่ง อีกฝ่ายหนึ่งมีสิทธิ์บอกเลิกสัญญาและเรียกค่าเสียหายเป็นเงินจำนวนไม่เกินกว่าราคาค่าจ้างตามสัญญาฉบับนี้จากฝ่ายที่ผิดสัญญาได้ โดยแจ้งเป็นลายลักษณ์อักษรให้อีกฝ่ายหนึ่งทราบ ทั้งนี้ การที่อีกฝ่ายหนึ่งไม่ใช้สิทธิ์ในการบอกเลิกสัญญาในครั้งใด ไม่ถือเป็นการสละสิทธิ์ในการบอกเลิกสัญญาและเรียกร้องค่าเสียหายในครั้งต่อไป</span>
                </div>
            </div>
            <div className="mt-4 page-break-auto">
                <h2 className="text-xl font-bold">12. เหตุสุดวิสัย</h2>
                <div>
                    <span>กรณีคู่สัญญาฝ่ายใดฝ่ายหนึ่งไม่อาจปฏิบัติตามข้อตกลงข้อใดข้อหนึ่งในสัญญาฉบับนี้ได้ เนื่องมาจากสาเหตุที่อยู่เหนือการควบคุมของคู่สัญญาฝ่ายนั้น ไม่ถือเป็นการผิดสัญญา หากคู่สัญญาฝ่ายนั้นได้ใช้ความพยายามอย่างสูงสุดในการหลีกเลี่ยงหรือขจัดสาเหตุดังกล่าวให้หมดไป และได้แจ้งสาเหตุดังกล่าวให้แก่คู่สัญญาอีกฝ่ายทราบโดยไม่ชักช้า ทั้งนี้คู่สัญญาฝ่ายดังกล่าวจะต้องปฏิบัติตามข้อตกลงดังกล่าว ทันทีเมื่อสาเหตุดังกล่าวถูกขจัดให้หมดสิ้นไป</span>
                </div>
            </div>
            {}
            <div className={clsx("page-break-auto", props.isPrintMode ? "" : "hidden")}>
                <div className="mt-4 break">
                    <div>
                        <span className="ml-5">สัญญานี้มีจำนวนทั้งหมด 5 หน้า</span>
                        <span> พร้อมเอกสารแนบท้ายสัญญาซึ่งถือเป็นส่วนหนึ่งของสัญญาฉบับนี้ด้วย สัญญาฉบับนี้ได้ทำขึ้นเป็น 2 ฉบับ มีข้อความตรงกันถูกต้องตามความประสงค์ของคู่สัญญาทั้งสอง ซึ่งได้อ่านและเข้าใจข้อความดีโดยตลอดแล้ว เพื่อเป็นหลักฐานจึงได้ลงลายมือชื่อและประทับตราสำคัญต่อหน้าพยาน</span>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex flex-col items-center w-full">
                        <div>
                            <span>ลงชื่อ</span>
                            <span>....................................................................</span>
                            <span>ผู้ว่าจ้าง</span>
                        </div>
                        <div>
                            <span>(</span>
                            <span>....................................................................</span>
                            <span>)</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div>(ประทับตรา)</div>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex flex-col items-center w-full">
                        <div>
                            <span>ลงชื่อ</span>
                            <span>....................................................................</span>
                            <span>ผู้รับจ้าง</span>
                        </div>
                        <div>
                            <span>(</span>
                            <span>....................................................................</span>
                            <span>)</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div>(ประทับตรา)</div>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex flex-col items-center w-full">
                        <div>
                            <span>ลงชื่อ</span>
                            <span>....................................................................</span>
                            <span>พยาน</span>
                        </div>
                        <div>
                            <span>(</span>
                            <span>....................................................................</span>
                            <span>)</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">

                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex flex-col items-center w-full">
                        <div>
                            <span>ลงชื่อ</span>
                            <span>....................................................................</span>
                            <span>พยาน</span>
                        </div>
                        <div>
                            <span>(</span>
                            <span>....................................................................</span>
                            <span>)</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}