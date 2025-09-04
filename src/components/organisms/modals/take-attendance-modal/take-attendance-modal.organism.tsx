"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { membersDummyData } from "@/constants/data";

interface TakeAttendanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}


export const TakeAttendanceModal: React.FC<TakeAttendanceModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [attendance, setAttendance] = React.useState<Record<string | number, boolean>>(
    {}
  );
  const [search, setSearch] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);

  const toggleAttendance = (id: number | string) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const markAll = (present: boolean) => {
    const updated: Record<number | string, boolean> = {};
    membersDummyData.forEach((m) => {
      updated[m.id] = present;
    });
    setAttendance(updated);
  };

  const handleSave = () => {
    console.log("Attendance recorded:", attendance);
    // TODO: send to backend
  };

  // Filter + sort members
  const filteredMembers = membersDummyData
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
      onPrimaryButtonClick={handleSave}
      primaryButtonText="Take Attendance"
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
          <Button variant="outline" size="sm" onClick={() => markAll(true)}>
            Mark All Present
          </Button>
          <Button variant="outline" size="sm" onClick={() => markAll(false)}>
            Mark All Absent
          </Button>
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
              <tr key={member.id} className="border-t hover:bg-gray-50 cursor-pointer" onClick={() => toggleAttendance(member.id)}>
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
