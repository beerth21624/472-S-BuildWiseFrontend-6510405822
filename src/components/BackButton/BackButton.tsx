import { Text, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <UnstyledButton
      className="w-fit"
      variant="transparent"
      size="compact-xs"
      c={"dimmed"}
      onClick={() => router.back()}
    >
      <div className="flex items-center gap-1">
        <IconArrowLeft size={15} />
        <Text size="xs">กลับไปหน้ารายการโครงการ</Text>
      </div>
    </UnstyledButton>
  );
}
