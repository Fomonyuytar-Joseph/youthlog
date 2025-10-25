"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useEffect, useState } from "react";
import { MembersTable } from "../tables/members-table/members-table.organism";
import AddMemberModal from "../modals/add-modals/add-member-modal/add-member-modal.organism";
import { YouthsResponseType } from "@/types/members.type";
// import { membersDummyData } from "@/constants/data";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";
import { EditMemberModal } from "../modals/edit-modals/edit-member-modal/edit-member-modal.organism";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-app";
import { getYouthsThunk } from "@/features/youths/get-youths/thunks/get-youths.thunk";

const MembersPage = () => {
  const dispatch = useAppDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<YouthsResponseType | null>(
    {} as YouthsResponseType
  );
  const { youths} = useAppSelector((state) => state.getYouthsSlice);
  

  const handleDelete = (member: YouthsResponseType) => {
    setSelectedMember(member);
    console.table(member);
    console.table(selectedMember);
    setIsDeleteModal(true);
  };

  const handleEdit = (member: YouthsResponseType) => {
    setSelectedMember(member);
    setIsEditModal(true);
    console.table(member);
  };

  const handleSave = (member: YouthsResponseType) => {
    console.table(member);
    setIsEditModal(false);
  };

  useEffect(() => {
    dispatch(getYouthsThunk());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton text="Add Members" onClick={() => setIsAddModalOpen(true)} />
        <h3 className="text-base font-semibold text-slate-500">
          Total Youths: 100
        </h3>
      </div>
      <MembersTable
        data={youths || []}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {isAddModalOpen && (
        <AddMemberModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
      )}

      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
      )}
      <EditMemberModal
        isOpen={isEditModal}
        setIsOpen={setIsEditModal}
        member={selectedMember}
        onSave={handleSave}
        availableRoles={[
          "member",
          "president",
          "vice president",
          "secretary",
          "treasurer",
        ]}
      />
    </div>
  );
};

export default MembersPage;
