import BackButton from "@/components/BackButton/BackButton";
import ProjectForm from "@/components/Project/ProjectForm/ProjectForm";
import { Text } from "@mantine/core";

export default function Index() {
  return (
    <div className="flex flex-col">
      <div>
        <BackButton href="/project" />
      </div>
      <Text size="xl" fw={700}>
        สร้างโครงการใหม่
      </Text>
      <ProjectForm type="create" />
    </div>
  );
}
