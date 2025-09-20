"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import AddFinanceModal from "../modals/add-finance-modal/add-finance-modal.organism";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import FinanceTable from "../tables/finance-table/finance-table.organism";
import { financeDummyData } from "@/constants/data";
import { FinanceType } from "@/types/finance.type";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";

const FinancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedFinance, setSelectedFinance] = useState<FinanceType | null>(
      {} as FinanceType
    );
  
    const handleDelete = (finance: FinanceType) => {
      setSelectedFinance(finance);
      console.table(finance);
      console.table(selectedFinance);
      setIsDeleteModal(true);
    };
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <AddButton text="Record Finance" onClick={() => setIsModalOpen(true)} />
        <h3 className="text-base font-semibold text-slate-500">
          Balance: 500XAF
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard value={"500 XFA"} title="Total Balance" color="green" />
        <EntityCard value={"200 XFA"} title="Total Income" color="blue" />
        <EntityCard value={"100 XFA"} title="Total Expenses" color="red" />
      </div>
      <FinanceTable data={financeDummyData} handleDelete={handleDelete} />
      {isModalOpen && (
        <AddFinanceModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
      )}
    </div>
  );
};

export default FinancePage;
