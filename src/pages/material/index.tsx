import {
  Badge,
  Button,
  Drawer,
  Menu,
  MultiSelect,
  rem,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { format } from "date-fns";
import {
  IconDotsVertical,
  IconEdit,
  IconFilter,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React from "react";
import Link from "next/link";
import { modals } from "@mantine/modals";
import { DeleteConfirmModalConfig } from "@/config/ConfirmModalConfig/ConfirmModalConfig";

export default function Material() {
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
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <Text size="xl" fw={700}>
            รายการวัสดุ
          </Text>
          <Link href="/material/create">
            <Button leftSection={<IconPlus size={15} />}>เพิ่มวัสดุ</Button>
          </Link>
        </div>
        <DataTable
          records={[
            {
              name: "ปูน",
              unit: "กิโลกรัม",
            },
          ]}
          // define columns
          columns={[
            {
              accessor: "name",
              title: "ชื่อ",
            },
            {
              accessor: "unit",
              title: "หน่วยของวัสดุ",
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
                    <Link href={"/material/edit/" + "tesss"}>
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
