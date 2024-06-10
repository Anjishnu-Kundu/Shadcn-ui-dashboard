import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="gap-[32px] grid">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <Lines />
      <div className="grid grid-cols-2 gap-[32px] h-[300px] overflow-hidden">
        <Card className="p-[32px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>These are the orders of this month.</CardDescription>
          </CardHeader>
          <div className="px-4">
            <TableDemo />
          </div>
        </Card>
        <Card className="p-[32px] overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the users of this month.</CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
        {/* <Card className="h-[300px]">Hello World</Card> */}
      </div>
      {/* <Button variant={"outline"}>Click Me!</Button> */}
    </div>
  );
}
