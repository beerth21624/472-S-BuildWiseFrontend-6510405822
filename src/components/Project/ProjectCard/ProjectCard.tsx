import useGetProject from "@/hooks/queries/project/useGetProject";
import { Project } from "@/services/project/getProjects.service";
import { getProjectStatusMap } from "@/utils/projectStatusMap";
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

interface Props {
  project: Project;
}

export default function ProjectCard(props: Props) {
  return (
    <Card withBorder className="flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Link href={"/project/" + props.project.id}>
            <Text size="md" fw={500}>
              {props.project.name}
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
          {props.project.description}
        </Text>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {getProjectStatusMap(props.project.status)?.icon}
          <Text c="dimmed" size="xs">
            {getProjectStatusMap(props.project.status)?.label}
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
