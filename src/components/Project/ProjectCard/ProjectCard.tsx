import {
  ActionIcon,
  Card,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Card withBorder className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Link href={"/project/" + "LK687678"}>
            <Text size="md" fw={500}>
              โครงการคอนโด 30 ชั้น
            </Text>
          </Link>
          <Menu
            shadow="md"
            width={200}
            position="bottom-end"
            trigger="hover"
            offset={1}
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
              <Menu.Item
                leftSection={
                  <IconEye style={{ width: rem(14), height: rem(14) }} />
                }
              >
                ดูรายละเอียด
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconTrash style={{ width: rem(14), height: rem(14) }} />
                }
                c="red"
              >
                ลบ
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <Text c="dimmed" size="xs" fw={500}>
          บริษัท มี.คอนสตรัคชั่น จำกัด
        </Text>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <IconClock className="text-blue-400" size={15} />
          <Text c="dimmed" size="xs">
            กำลังดำเนินการ
          </Text>
        </div>
        <div className="flex items-center gap-1">
          <IconCalendar className="text-gray-400" size={15} />
          <Text c="dimmed" size="xs">
            20 ก.ย. 2024
          </Text>
        </div>
      </div>
    </Card>
  );
}
