"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useState } from "react";
import { MembersTable } from "../members-table/members-table.organism";
import AddFinanceModal from "../modals/add-finance-modal/add-finance-modal.organism";
import FinanceCard from "@/components/molecules/finance-card/finance-card.molecule";

const FinancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton text="finance" onClick={() => setIsModalOpen(true)} />
        <h3 className="text-base font-semibold text-slate-500">Balance: 500XAF</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
       <FinanceCard value={500} title="Total Balance" color="green" />
       <FinanceCard value={200} title="Total Income" color="blue" />
       <FinanceCard value={100} title="Total Expenses" color="red" />
      </div>
      <MembersTable />
      {isModalOpen && <AddFinanceModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  );
};

export default FinancePage;
