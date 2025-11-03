"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useEffect, useState } from "react";
import AddFinanceModal from "../modals/add-modals/add-finance-modal/add-finance-modal.organism";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import FinanceTable from "../tables/finance-table/finance-table.organism";
import { FinanceRequestType, FinanceResponseType } from "@/types/finance.type";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";
import EditFinanceModal from "../modals/edit-modals/edit-finance-modal/edit-finance-modal.organism";
import { useForm } from "@/lib/hooks/use-form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-app";
import { deleteFinanceThunk } from "@/features/finances/delete-finance/thunks/delete-finance.thunk";
import { ApiRequestStatus } from "@/types/api/api.types";
import { addFinanceThunk } from "@/features/finances/add-finance/thunks/add-finance.thunk";
import { getFinancesThunk } from "@/features/finances/get-finances/thunks/get-finances.thunk";
import { toast } from "sonner";
import { resetDeleteFinanceState } from "@/features/finances/delete-finance/slices/delete-finance.slice";
import { resetAddFinanceState } from "@/features/finances/add-finance/slices/add-finance.slice";
import FinanceFilter from "@/components/molecules/finance-filter/finance-filter.molecule";

const FinancePage = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedFinance, setSelectedFinance] =
    useState<FinanceResponseType | null>({} as FinanceResponseType);
  useState<FinanceResponseType | null>({} as FinanceResponseType);
  const { formData, setFormData, updateForm } = useForm<FinanceRequestType>({
    amount: "",
    type: "INCOME",
    date: "",
    description: "",
    title: "",
    // recordedBy: "",
  });
  const { finances ,totalExpense , totalIncome } = useAppSelector((state) => state.getFinanceSlice);
  const { requestResponse: addFinanceResponse, finance } = useAppSelector(
    (state) => state.addFinanceSlice
  );
  const { requestResponse: deleteFinanceResponse } = useAppSelector(
    (state) => state.deleteFinanceSlice
  );

  const handleEdit = (finance: FinanceResponseType) => {
    setSelectedFinance(finance);
    setIsEditModal(true);
    console.table(finance);
  };

  const handleDeleteFinance = (id: string) => {
    dispatch(deleteFinanceThunk(id));
  };

  const handleDelete = (finance: FinanceResponseType) => {
    setSelectedFinance(finance);
    console.table(finance);
    console.table(selectedFinance);
    setIsDeleteModal(true);
  };

  const handleAddFinance = () => {
    dispatch(addFinanceThunk(formData));
  };

  const handleSave = (finance: FinanceResponseType) => {
    console.table(finance);
    setIsEditModal(false);
  };

  useEffect(() => {
    if (addFinanceResponse.status === ApiRequestStatus.FULFILLED) {
      setIsModalOpen(false);
      toast.success("New Finance has been added");
      setTimeout(() => {
        dispatch(resetAddFinanceState());
      }, 2000);
      dispatch(getFinancesThunk());
      setFormData({
        amount: "",
        type: "INCOME",
        date: "",
        description: "",
        title: "",
      });
    }

    if (addFinanceResponse.status === ApiRequestStatus.REJECTED) {
      setIsModalOpen(false);
      dispatch(resetAddFinanceState());
      console.log(addFinanceResponse.error);
      toast.error("Failed to add new Finance. Please try again.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addFinanceResponse, dispatch, finance]);

  useEffect(() => {
    if (deleteFinanceResponse.status === ApiRequestStatus.FULFILLED) {
      setIsDeleteModal(false);
      toast.success("Finance has been deleted");
      dispatch(resetDeleteFinanceState());
      dispatch(getFinancesThunk());
    }

    if (deleteFinanceResponse.status === ApiRequestStatus.REJECTED) {
      setIsDeleteModal(false);
      console.log(deleteFinanceResponse.error);
      toast.error("Failed to delete Finance. Please try again.");
      dispatch(resetDeleteFinanceState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteFinanceResponse]);

  useEffect(() => {
    dispatch(getFinancesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleFilterChange = (filter: { year: number; month: string }) => {
    console.log("Selected Filter:", filter);

    // Example:
    // if (filter.month === "All Months") fetch all finance records for that year
    // else fetch records for that specific month & year
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <AddButton text="Record Finance" onClick={() => setIsModalOpen(true)} />
        <h3 className="text-base font-semibold text-slate-500">
          Balance: {totalIncome - totalExpense} XAF
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard
          value={`${totalIncome - totalExpense} XAF`}
          title="Total Balance"
          color="green"
        />
        <EntityCard
          value={`${totalIncome} XAF`}
          title="Total Income"
          color="blue"
        />
        <EntityCard
          value={`${totalExpense} XAF`}
          title="Total Expenses"
          color="red"
        />
      </div>
      <FinanceFilter
        availableYears={[2023, 2024, 2025]}
        onFilterChange={handleFilterChange}
      />
      <FinanceTable
        data={finances || []}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {isModalOpen && (
        <AddFinanceModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          updateForm={updateForm}
          form={formData}
          setForm={setFormData}
          handleAddFinance={handleAddFinance}
          loading={addFinanceResponse.status === ApiRequestStatus.PENDING}
        />
      )}
      {isDeleteModal && (
        <DeleteModal
          isOpen={isDeleteModal}
          setIsOpen={setIsDeleteModal}
          onClick={() => handleDeleteFinance(selectedFinance?.id as string)}
          loading={deleteFinanceResponse.status === ApiRequestStatus.PENDING}
        />
      )}
      <EditFinanceModal
        isOpen={isEditModal}
        setIsOpen={setIsEditModal}
        finance={selectedFinance}
        onSave={handleSave}
        recordedByOptions={["Joseph", "Mary", "Peter"]}
      />
    </div>
  );
};

export default FinancePage;
