"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useEffect, useState } from "react";
import AttendanceTable from "../tables/attendance-table/attendance-table.organism";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import TakeAttendanceModal from "../modals/add-modals/take-attendance-modal/take-attendance-modal.organism";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";
import { AttendanceRequestType, SummaryType } from "@/types/attendance.type";
// import { EditAttendanceModal } from "../modals/edit-modals/edit-attendance-modal/edit-attendance-modal.organism";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-app";
import { getAttendancesThunk } from "@/features/attendances/get-attendances/thunks/get-attendances.thunks";
import { getYouthsThunk } from "@/features/youths/get-youths/thunks/get-youths.thunk";
import { addAttendanceThunk } from "@/features/attendances/add-attendance/thunks/add-attendance.thunk";
import { ApiRequestStatus } from "@/types/api/api.types";
import { toast } from "sonner";
import { resetAddAttendanceState } from "@/features/attendances/add-attendance/slices/add-attendance.slice";
import { resetDeleteAttendanceState } from "@/features/attendances/delete-attendance/slices/delete-attendance.slice";
import { deleteAttendanceThunk } from "@/features/attendances/delete-attendance/thunks/delete-attendance.thunk";

const AttendancePage = () => {
  const dispatch = useAppDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEditModal, setIsEditModal] = useState(false);
  const [youthAttendance, setYouthAttendance] = useState(
    [] as AttendanceRequestType[]
  );
  const [selectedAttendance, setSelectedAttendance] =
    useState<SummaryType | null>({} as SummaryType);
  const { youths } = useAppSelector((state) => state.getYouthsSlice);
  const { attendances, highestAttendance, lowestAttendance } = useAppSelector(
    (state) => state.getAttendanceSlice
  );
  const { requestResponse: addAttendanceResponse } = useAppSelector(
    (state) => state.addAttendanceSlice
  );

  const { requestResponse: deleteAttendanceResponse } = useAppSelector(
    (state) => state.deleteAttendanceSlice
  );

  const handleDeleteAttendance = (date: string) => {
    dispatch(deleteAttendanceThunk(date));
  };

  const handleDelete = (attendance: SummaryType) => {
    setSelectedAttendance(attendance);
    console.table(attendance);
    console.table(selectedAttendance);
    setIsDeleteModal(true);
  };

  const handleEdit = (attendance: SummaryType) => {
    setSelectedAttendance(attendance);
    setIsEditModal(true);
    console.table(attendance);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSave = (updatedRecords: { id: string; present: boolean }[]) => {
    console.log("Updated Attendance:", updatedRecords);
    // setAttendanceRecords(updatedRecords); // Save to state or send to backend
  };

  const handleTakeAttendance = () => {
    dispatch(addAttendanceThunk(youthAttendance));
    // TODO: send to backend
  };

  useEffect(() => {
    dispatch(getAttendancesThunk());
    dispatch(getYouthsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addAttendanceResponse.status === ApiRequestStatus.FULFILLED) {
      setIsAddModalOpen(false);
      toast.success("New Attendance has been added");
      setTimeout(() => {
        dispatch(resetAddAttendanceState());
      }, 2000);
    }

    if (addAttendanceResponse.status === ApiRequestStatus.REJECTED) {
      setIsAddModalOpen(false);
      dispatch(resetAddAttendanceState());
      console.log(addAttendanceResponse.error);
      toast.error("Failed to add attendance. Please try again.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addAttendanceResponse]);

  useEffect(() => {
    if (deleteAttendanceResponse.status === ApiRequestStatus.FULFILLED) {
      setIsDeleteModal(false);
      toast.success("Attendance has been deleted");
      dispatch(resetDeleteAttendanceState());
      dispatch(getAttendancesThunk());
    }

    if (deleteAttendanceResponse.status === ApiRequestStatus.REJECTED) {
      setIsDeleteModal(false);
      console.log(deleteAttendanceResponse.error);
      toast.error("Failed to delete Attendance. Please try again.");
      dispatch(resetDeleteAttendanceState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteAttendanceResponse]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton
          text="Take Attendance"
          onClick={() => setIsAddModalOpen(true)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard
          value={highestAttendance}
          title="Highest Attendance"
          color="green"
        />
        <EntityCard
          value={lowestAttendance}
          title="Lowest Attendance"
          color="red"
        />
      </div>
      <AttendanceTable
        data={attendances}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {isAddModalOpen && (
        <TakeAttendanceModal
          isOpen={isAddModalOpen}
          setIsOpen={setIsAddModalOpen}
          youths={youths || []}
          setYouthAttendance={setYouthAttendance}
          onClick={handleTakeAttendance}
          loading={addAttendanceResponse.status === ApiRequestStatus.PENDING}
        />
      )}

      {isDeleteModal && (
        <DeleteModal
          isOpen={isDeleteModal}
          setIsOpen={setIsDeleteModal}
          onClick={() =>
            handleDeleteAttendance(
              selectedAttendance
                ? selectedAttendance.date.toString()
                : ""
            )
          }
          loading={deleteAttendanceResponse.status === ApiRequestStatus.PENDING}
        />
      )}

      {/* <EditAttendanceModal
        isOpen={isEditModal}
        setIsOpen={setIsEditModal}
        members={membersDummyData}
        attendanceRecords={selectedAttendance ?? []}
        onSave={handleSave}
      /> */}
    </div>
  );
};

export default AttendancePage;
