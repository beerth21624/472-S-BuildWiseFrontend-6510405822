import { Badge, Button, Menu, rem, Text, UnstyledButton } from "@mantine/core";
import {
  IconDotsVertical,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React from "react";
import Link from "next/link";
import { modals } from "@mantine/modals";

export default function Job() {
  const onDelete = (client: unknown) => {
    modals.openConfirmModal({
      title: "ยืนยันการลบ",
      children: (
        <Text size="sm">
          คุณแน่ใจหรือไม่ว่าต้องการลบ <Badge>pawin.bu@ku.th</Badge>
        </Text>
      ),
      labels: { confirm: "ยืนยัน", cancel: "ยกเลิก" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <Text size="xl" fw={700}>
            รายการงาน
          </Text>
          <Link href="/job/create">
            <Button leftSection={<IconPlus size={15} />}>เพิ่มงาน</Button>
          </Link>
        </div>
        <DataTable
          records={[
            {
              name: "พาวิน บุญก่อสร้าง",
              email: "pawin.bu@ku.th",
              phone: "086-3453-446",
              tax_id: "11xxxxxxxxxxxxx",
            },
          ]}
          // define columns
          columns={[
            {
              accessor: "name",
              title: "ชื่องาน",
            },
            {
              accessor: "email",
              title: "รายละเอียดงาน",
            },
            {
              accessor: "phone",
              title: "หน่วยของงาน",
            },
            {
              accessor: "tax_id",
              title: "วัสดุ",
            },
            {
              accessor: "id",
              title: "ดำเนินการ",
              textAlign: "center",
              render: (record) => (
                <Menu
                  shadow="md"
                  width={200}
                  position="bottom-end"
                  trigger="hover"
                  withArrow
                >
                  <Menu.Target>
                    <UnstyledButton variant="transparent">
                      <IconDotsVertical size={15} color="gray" />
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>การดำเนินการ</Menu.Label>
                    <Link href={"/job/edit/" + "tesss"}>
                      <Menu.Item
                        leftSection={
                          <IconPencil
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        แก้ไข
                      </Menu.Item>
                    </Link>
                    <Menu.Item
                      leftSection={
                        <IconTrash
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                      onClick={() => onDelete(record)}
                      color="red"
                    >
                      ลบ
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
