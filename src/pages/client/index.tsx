import {
  Badge,
  Button,
  Drawer,
  Menu,
  MultiSelect,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";

export default function BOQ() {
  const [opened, { open, close }] = useDisclosure(false);

  const onDelete = (client: unknown) => {
    modals.openConfirmModal({
      ...DeleteConfirmModalConfig,
      children: (
        <Text size="sm">
          คุณแน่ใจหรือไม่ว่าต้องการลบ <Badge>pawin.bu@ku.th</Badge>
        </Text>
      ),
      onConfirm: () => console.log("Confirmed"),
    });
  };

  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        title="การค้นหาขั้นสูง"
      >
        <div className="flex flex-col gap-3">
          <MultiSelect
            searchable
            clearable
            label="สถานะ BOQ"
            placeholder="สถานะ BOQ"
            data={["แบบร่าง", "ยังไม่ได้ทำ", "ทำแล้ว"]}
          />
        </div>
      </Drawer>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <Text size="xl" fw={700}>
            รายการลูกค้า
          </Text>
          <Link href="/client/create">
            <Button leftSection={<IconPlus size={15} />}>สร้างลูกค้า</Button>
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
              title: "ชื่อ",
            },
            {
              accessor: "email",
              title: "อีเมล",
            },
            {
              accessor: "phone",
              title: "เบอร์โทรติดต่อ",
            },
            {
              accessor: "tax_id",
              title: "เลขประจำตัวผู้เสียภาษี",
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
                    <Link href={"/client/edit/" + "tesss"}>
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
