"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import AddProgramModal from "../modals/add-modals/add-program-modal/add-program-modal.organism";
import ProgramTable from "../tables/program-table/program-table.organism";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";
import { programsDummyData } from "@/constants/data";
import { ProgramType } from "@/types/programs.type";
import EditProgramModal from "../modals/edit-modals/edit-program-modal/edit-program-modal.organism";

const ProgramPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType | null>(
    {} as ProgramType
  );

  const handleDelete = (program: ProgramType) => {
    setSelectedProgram(program);
    console.table(program);
    console.table(selectedProgram);
    setIsDeleteModal(true);
  };

  const handleEdit = (program: ProgramType) => {
    setSelectedProgram(program);
    setIsEditModal(true);
    console.table(program);
  };

  const handleSave = (program: ProgramType) => {
    console.table(program);
    setIsEditModal(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <AddButton text="Add Program" onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard value={20} title="Total Programs" color="green" />
        <EntityCard value={5} title="Completed Programs" color="blue" />
      </div>
      <ProgramTable
        data={programsDummyData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {isModalOpen && (
        <AddProgramModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}

      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
      )}
      <EditProgramModal
        isOpen={isEditModal}
        setIsOpen={setIsEditModal}
        program={selectedProgram}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProgramPage;
