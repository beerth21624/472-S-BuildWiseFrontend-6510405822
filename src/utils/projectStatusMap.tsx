import {
  IconAlertCircle,
  IconCalendar,
  IconCheck,
  IconClock,
} from "@tabler/icons-react";

export const projectStatus = [
  {
    label: "วางแผน",
    value: "planning",
    icon: <IconCalendar />,
  },
  {
    label: "กำลังดำเนินการ",
    value: "in_progress",
    icon: <IconClock />,
  },
  {
    label: "เสร็จสิ้น",
    value: "completed",
    icon: <IconCheck />,
  },
  {
    label: "ยกเลิก",
    value: "cancelled",
    icon: <IconAlertCircle />,
  },
];

export const getProjectStatusMap = (value: string) => {
  return projectStatus.find((item) => item.value === value);
};
