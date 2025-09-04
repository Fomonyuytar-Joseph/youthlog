"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TakeAttendanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

type Member = {
  id: number;
  name: string;
};

const members: Member[] = [
  { id: 62, name: "John Doe" },
  { id: 83, name: "Jane Smith" },
  { id: 97, name: "Paul Joseph" },
  { id: 3, name: "Mae James" },
  { id: 57, name: "Gertrude Holt" },
  { id: 8, name: "James Bryant" },
  { id: 58, name: "Maggie Benson" },
  { id: 75, name: "Willie Huff" },
  { id: 157, name: "Gene Bailey" },
  { id: 55, name: "Lily Dennis" },
  { id: 35, name: "Lora Sanders" },
  { id: 27, name: "Tommy Padilla" },
  { id: 81, name: "Evan Vega" },
  { id: 100, name: "Gavin Cannon" },
  { id: 5, name: "Ida Hodges" },
  { id: 29, name: "Birdie Richards" },
  { id: 47, name: "Eleanor Goodman" },
  { id: 179, name: "John Sanchez" },
  { id: 137, name: "Jeremiah Rogers" },
  { id: 37, name: "Virginia Luna" },
  { id: 79, name: "Julian Logan" },
  { id: 60, name: "Glen Welch" },
  { id: 65, name: "Eunice Pittman" },
  { id: 16, name: "Calvin Terry" },
];

export const TakeAttendanceModal: React.FC<TakeAttendanceModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [attendance, setAttendance] = React.useState<Record<number, boolean>>(
    {}
  );
  const [search, setSearch] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);

  const toggleAttendance = (id: number) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = () => {
    console.log("Attendance recorded:", attendance);
    // TODO: send to backend
  };

  // Filter + sort members
  const filteredMembers = members
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
      <div className="flex items-center gap-2 mb-3">
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
              <tr key={member.id} className="border-t hover:bg-gray-50">
                <td className="px-3 py-2">{member.name}</td>
                <td className="text-center px-3 py-2">
                  <Checkbox
                    checked={attendance[member.id] || false}
                    onCheckedChange={() => toggleAttendance(member.id)}
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
