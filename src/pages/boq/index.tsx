import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Drawer,
  Menu,
  MultiSelect,
  rem,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { format } from "date-fns";
import {
  IconCalendar,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconFilter,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import React from "react";

export default function BOQ() {
  const [opened, { open, close }] = useDisclosure(false);
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
        <Text size="xl" fw={700}>
          รายการ BOQ
        </Text>
        <div className="flex justify-between">
          
        </div>
        <DataTable
          records={[
            {
              id: 1,
              project_name: "โครงการคอนโด 30 ชั้น",
              bqo_status: "แบบร่าง",
              last_update: new Date().toJSON(),
            },
          ]}
          // define columns
          columns={[
            {
              accessor: "id",
              title: "#",
              textAlign: "right",
            },
            {
              accessor: "project_name",
              title: "ชื่อโครงการ",
              width: 600,
            },

            {
              accessor: "bqo_status",
              title: "สถานะ BOQ",
              noWrap: true,
              render: (record) => (
                <Badge variant="dot">{record.bqo_status}</Badge>
              ),
            },
            {
              accessor: "last_update",
              title: "วันที่อัพเดทล่าสุด",
              noWrap: true,
              render(record) {
                return (
                  <div>
                    {format(new Date(record.last_update), "dd/MM/yyyy HH:mm")}
                  </div>
                );
              },
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
                    <Menu.Item
                      leftSection={
                        <IconEdit style={{ width: rem(14), height: rem(14) }} />
                      }
                    >
                      แก้ไข
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
