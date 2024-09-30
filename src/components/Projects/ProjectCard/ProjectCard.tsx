import { ActionIcon, Card, Menu, rem, Text } from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconDotsVertical,
  IconEye,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export default function ProjectCard() {
  return (
    <Card withBorder className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Text size="md" fw={500}>
            โครงการคอนโด 30 ชั้น
          </Text>
          <Menu
            shadow="md"
            width={200}
            position="bottom-end"
            trigger="hover"
            offset={1}
            withArrow
            
          >
            <Menu.Target>
              <ActionIcon color="gray" variant="transparent">
                <IconDotsVertical
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>การดำเนินการ</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings style={{ width: rem(14), height: rem(14) }} />
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
