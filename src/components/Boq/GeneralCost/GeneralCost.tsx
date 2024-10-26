import { Button, Menu, Modal, Text, UnstyledButton, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical, IconPencil, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import GeneralCostForm from "./GeneralCostForm/GeneralCostForm";

export default function GeneralCost() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="เพิ่มค่าใช้จ่าย">
        <GeneralCostForm type="create" />
      </Modal>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Text fw={700}>ค่าใช้จ่ายทั่วไปของ BOQ</Text>
          <Button onClick={open}>เพิ่มค่าใช้จ่าย</Button>
        </div>
        <DataTable
          records={[
            {
              type: "ค่าใช้จ่ายทั่วไป",
              name: "ค่าโทรศัพท์",
              estimated_price: "100 บาท",
            },
          ]}
          // define columns
          columns={[
            {
              accessor: "type",
              title: "ประเภท",
            },
            {
              accessor: "name",
              title: "ชื่อรายการ",
            },
            {
              accessor: "estimated_price",
              title: "ราคาประมาณการ",
            },
            {
              accessor: "id",
              title: "ดำเนินการ",
              textAlign: "center",
              render: (record) => (
                <Menu
                  shadow="md"
                  width={200}
                  position="bottom-end"
                  trigger="hover"
                  withArrow
                >
                  <Menu.Target>
                    <UnstyledButton variant="transparent">
                      <IconDotsVertical size={15} color="gray" />
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>การดำเนินการ</Menu.Label>
                    <Link href={"/client/edit/" + "tesss"}>
                      <Menu.Item
                        leftSection={
                          <IconPencil
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                      >
                        แก้ไข
                      </Menu.Item>
                    </Link>
                    <Menu.Item
                      leftSection={
                        <IconTrash
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                      color="red"
                    >
                      ลบ
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
