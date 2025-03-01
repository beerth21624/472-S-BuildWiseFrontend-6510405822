import { Button, Drawer, MultiSelect, Skeleton, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    IconCalendar,
    IconFilter,
    IconPlus,
    IconSearch,
} from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/Project/ProjectCard/ProjectCard";
import useGetProjects from "@/hooks/queries/project/useGetProjects";

export default function Index() {
    const getProjectsApi = useGetProjects();
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
                        label="สถานะโครงการ"
                        placeholder="เลือกสถานะโครงการ"
                        data={["วางแผน", "กำลังดำเนินการ", "Vue", "Svelte"]}
                    />
                    <DateInput
                        label="วันที่เริ่มโครงการ"
                        placeholder="เลือกวันที่เริ่มโครงการ"
                        leftSection={<IconCalendar size={15} />}
                    />
                    <DateInput
                        label="วันที่สิ้นสุดโครงการ"
                        placeholder="เลือกวันที่สิ้นสุดโครงการ"
                        leftSection={<IconCalendar size={15} />}
                    />
                </div>
            </Drawer>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <Text size="xl" fw={700}>
                        รายการโครงการ
                    </Text>
                    <Link href="/project/create">
                        <Button leftSection={<IconPlus size={15} />}>สร้างโครงการ</Button>
                    </Link>
                </div>
                {
                    getProjectsApi.isLoading ? (
                        <div className="grid grid-cols-3 gap-3">
                            {new Array(20).fill(0).map((_, index) => (
                                <Skeleton key={index} height={121} mt={6} />
                            ))}
                        </div>
                    ) : <div className="grid grid-cols-3 gap-3">
                        {getProjectsApi.data?.data.projects.map((project, index) => (
                            <ProjectCard project={project} key={index} />
                        ))}
                    </div>
                }

            </div>
        </>
    );
}
