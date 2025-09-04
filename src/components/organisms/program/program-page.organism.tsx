"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import AddProgramModal from "../modals/add-program-modal/add-program-modal.organism";
import ProgramTable from "../tables/program-table/program-table.organism";

const ProgramPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <AddButton text="Add Program" onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard value={20} title="Total Programs" color="green" />
        <EntityCard value={5} title="Completed Programs" color="blue" />
      </div>
      <ProgramTable />
      {isModalOpen && (
        <AddProgramModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default ProgramPage;
