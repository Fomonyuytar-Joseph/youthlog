"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YouthsResponseType } from "@/types/members.type";
import { useForm } from "@/lib/hooks/use-form";
import { AttendanceRequestType } from "@/types/attendance.type";

interface TakeAttendanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  youths: YouthsResponseType[];
  onClick?: () => void;
  setYouthAttendance: React.Dispatch<
    React.SetStateAction<AttendanceRequestType[]>
  >;
  loading:boolean
}

export const TakeAttendanceModal: React.FC<TakeAttendanceModalProps> = ({
  isOpen,
  setIsOpen,
  youths,
  setYouthAttendance,
  onClick,
  loading
}) => {
  const [attendance, setAttendance] = React.useState<
    Record<string | number, boolean>
  >({});
  const { formData, updateForm } = useForm<{ date: string }>({
    date: new Date().toISOString().split("T")[0],
  });
  const [search, setSearch] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);

  console.log(formData)

  const toggleAttendance = (id: number | string) => {
    console.log(formData ,'sds');
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setYouthAttendance((prev) => {
      const isPresent = !(attendance[id] || false); // since update is async

      const updated = prev.map((record) =>
        record.youthId === id.toString()
          ? { ...record, present: isPresent }
          : record
      );

      // If not found, add a new record
      if (!updated.some((r) => r.youthId === id.toString())) {
        updated.push({
          youthId: id.toString(),
          date: formData.date,
          type: "YOUTH_MEETING",
          present: isPresent,
        });
      }

      // If you have a list of all youths, ensure everyone is represented:
      const completeList = youths.map((y) => {
        const existing = updated.find((r) => r.youthId === y.id.toString());
        return (
          existing ?? {
            youthId: y.id.toString(),
            date: formData.date,
            type: "YOUTH_MEETING",
            present: false,
          }
        );
      });

      return completeList;
    });
  };


  const markAll = (present: boolean) => {
    const updated: Record<number | string, boolean> = {};
    youths.forEach((m) => {
      updated[m.id] = present;
    });
    setAttendance(updated);
    const allPresent = youths.map((y)=>{
      return {
        youthId: y.id.toString(),
        date: formData.date,
        type: "YOUTH_MEETING",
        present: true,
      };
    })

    setYouthAttendance(allPresent)
  };


  // Filter + sort members
  const filteredMembers = youths
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <ModalContainer
      title="Record Attendance"
      description="Add attendance to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={onClick}
      primaryButtonText="Take Attendance"
      loading={loading}
    >
      <div className="flex items-center justify-between mb-3">
        {/* Search + Sort */}
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortAsc((prev) => !prev)}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Mark all */}
        <div className="ml-2 flex gap-2">
          {/* <Button variant="outline" size="sm" onClick={() => markAll(true)}>
            Mark All Present
          </Button> */}
          <Button variant="outline" size="sm" onClick={() => markAll(false)}>
            Mark All Absent
          </Button>

          <div className="">
            <Input
              id="date"
              name="date"
              placeholder="date"
              type="date"
              value={formData.date}
              onChange={updateForm}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-h-64 overflow-y-auto border rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-3 py-2">Name</th>
              <th className="text-center px-3 py-2">Present</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr
                key={member.id}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleAttendance(member.id)}
              >
                <td className="px-3 py-2">{member.name}</td>
                <td className="text-center px-3 py-2">
                  <Checkbox
                    checked={attendance[member.id] || false}
                    // onCheckedChange={() => toggleAttendance(member.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModalContainer>
  );
};

export default TakeAttendanceModal;
