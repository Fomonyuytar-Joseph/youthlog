"use client";

import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MembersType } from "@/types/members.type";



export type AttendanceType = {
  id: string;
  present: boolean;
};

interface EditAttendanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  members: MembersType[];
  attendanceRecords?: AttendanceType[];
  onSave: (attendance: AttendanceType[]) => void;
}

export const EditAttendanceModal: React.FC<EditAttendanceModalProps> = ({
  isOpen,
  setIsOpen,
  members,
  attendanceRecords = [],
  onSave,
}) => {
  // Map memberId to present boolean
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // Initialize attendance from records
  useEffect(() => {
    const initial: Record<string, boolean> = {};
    members.forEach((m) => {
      const record = attendanceRecords.find((r) => r.id === m.id);
      initial[m.id] = record ? record.present : false;
    });
    setAttendance(initial);
  }, [members, attendanceRecords]);

  const toggleAttendance = (id: string) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const markAll = (present: boolean) => {
    const updated: Record<string, boolean> = {};
    members.forEach((m) => {
      updated[m.id] = present;
    });
    setAttendance(updated);
  };

  const handleSave = () => {
    const updatedRecords: AttendanceType[] = members.map((m) => ({
      id: m.id,
      present: attendance[m.id] || false,
    }));
    onSave(updatedRecords);
    setIsOpen?.(false);
  };

  const filteredMembers = members
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <ModalContainer
      title="Edit Attendance"
      description="Update attendance for members"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleSave}
      primaryButtonText="Save Attendance"
    >
      <div className="flex items-center justify-between mb-3">
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

        <div className="ml-2 flex gap-2">
          <Button variant="outline" size="sm" onClick={() => markAll(true)}>
            Mark All Present
          </Button>
          <Button variant="outline" size="sm" onClick={() => markAll(false)}>
            Mark All Absent
          </Button>
        </div>
      </div>

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
                  <Checkbox checked={attendance[member.id] || false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModalContainer>
  );
};

export default EditAttendanceModal;
