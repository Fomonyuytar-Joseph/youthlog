"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import { MembersTable } from "../tables/members-table/members-table.organism";
import AddMemberModal from "../modals/add-member-modal/add-member-modal.organism";
import { MembersType } from "@/types/members.type";
import { membersDummyData } from "@/constants/data";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";

const MembersPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MembersType | null>(
    {} as MembersType
  );

  const handleDelete = (member: MembersType) => {
    setSelectedMember(member);
    console.table(member);
    console.table(selectedMember);
    setIsDeleteModal(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton text="Add Members" onClick={() => setIsAddModalOpen(true)} />
        <h3 className="text-base font-semibold text-slate-500">
          Total Youths: 100
        </h3>
      </div>
      <MembersTable data={membersDummyData} handleDelete={handleDelete} />
      {isAddModalOpen && (
        <AddMemberModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
      )}

      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
      )}
    </div>
  );
};

export default MembersPage;
