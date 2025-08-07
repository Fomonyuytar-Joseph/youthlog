"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import AddMemberModal from "../modals/add-member-modal/add-member-modal.organism";
import AttendanceTable from "../tables/attendance-table/attendance-table.organism";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";

const AttendancePage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton text="Attendance" onClick={() => setIsAddModalOpen(true)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard value={"25"} title="Highest Attendance" color="green" />
        <EntityCard value={"5"} title="Lowest Attendance" color="red" />
      </div>
      <AttendanceTable />
      {isAddModalOpen && (
        <AddMemberModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
      )}
    </div>
  );
};

export default AttendancePage;
