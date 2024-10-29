import { type Project } from "@/services/project/getProjects.service";
import { getProjectStatusMap } from "@/utils/projectStatusMap";
import {
  Card,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
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
