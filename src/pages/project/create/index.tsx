import BackButton from "@/components/BackButton/BackButton";
import { Button, Text, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/schemas/project.schema";

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });
  return (
    <div className="flex flex-col">
      <div>
        <BackButton />
      </div>
      <Text size="xl" fw={700}>
        สร้างโครงการใหม่
      </Text>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        asdf
      </form>
    </div>
  );
}
