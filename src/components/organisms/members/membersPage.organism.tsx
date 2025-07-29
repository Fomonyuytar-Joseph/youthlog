"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import { MembersTable } from "../members-table/members-table.organism";
import AddMemberModal from "../modals/add-member-modal/add-member-modal.organism";

const MembersPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* <h3 className="text-2xl font-semibold text-slate-900">Members</h3> */}
        <AddButton text="members" onClick={() => setIsAddModalOpen(true)} />
      </div>
      <MembersTable />
      {isAddModalOpen && <AddMemberModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />}
    </div>
  );
};

export default MembersPage;
