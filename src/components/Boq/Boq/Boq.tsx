import { Button, Text } from "@mantine/core";
import BoqForm from "../BoqForm/BoqForm";
import { DataTable } from "mantine-datatable";

export default function Boq() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Text fw={700}>งานทั้งหมด</Text>
      </div>
      <DataTable
        columns={[
          {
            accessor: "name",
            title: "ชื่องาน",
          },
        ]}
      />
      {/* <BoqForm type="create" /> */}
    </div>
  );
}
