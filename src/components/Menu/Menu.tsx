import {
  IconLogout,
  IconLogin2,
  IconBriefcase,
  IconFileDescription,
  IconBox,
} from "@tabler/icons-react";
import classes from "./Menu.module.css";
import clsx from "clsx";
import { Button } from "@mantine/core";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const data = [
    { link: "/projects", label: "โครงการ", icon: IconBriefcase },
    { link: "/boqs", label: "BOQ", icon: IconFileDescription },
    { link: "/materials", label: "วัสดุ", icon: IconBox },
];

export function Menu() {
  const pathname = usePathname();
  const navigate = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const isCurrentPath = (link: string) => {
    return pathname === link;
  };

  const links = data.map((item, index) => (
    <Button
      onClick={() => navigate.push(item.link)}
      justify="start"
      variant={isCurrentPath(item.link) ? "gradient" : "subtle"}
      leftSection={<item.icon stroke={1.5} />}
      fullWidth
      key={index}
    >
      {item.label}
    </Button>
  ));

  return (
    <nav>
      <div className={clsx("flex flex-col gap-2")}>{links}</div>
      {sessionStatus === "authenticated" ? (
        <Button
          type="submit"
          justify="start"
          variant={"subtle"}
          color="red"
          fullWidth
          leftSection={<IconLogout stroke={1.5} />}
        >
          ออกจากระบบ
        </Button>
      ) : (
        <div className={classes.footer}>
          <Link href="/auth/sign-in">
            <Button
              onClick={() => navigate.push("/auth/sign-in")}
              justify="start"
              variant={"subtle"}
              fullWidth
              leftSection={<IconLogin2 stroke={1.5} />}
            >
              เข้่าสู่ระบบ
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
