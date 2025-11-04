"use client";
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React, { useEffect, useState } from "react";
import AttendanceTable from "../tables/attendance-table/attendance-table.organism";
import EntityCard from "@/components/molecules/finance-card/entity-card.molecule";
import TakeAttendanceModal from "../modals/add-modals/take-attendance-modal/take-attendance-modal.organism";
import DeleteModal from "../modals/delete-modal/delete-modal.organism";
import { attendanceDummyData, membersDummyData } from "@/constants/data";
import { AttendanceRequestType, AttendanceType } from "@/types/attendance.type";
import { EditAttendanceModal } from "../modals/edit-modals/edit-attendance-modal/edit-attendance-modal.organism";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/use-app";
import { getAttendancesThunk } from "@/features/attendances/get-attendances/thunks/get-attendances.thunks";
import { getYouthsThunk } from "@/features/youths/get-youths/thunks/get-youths.thunk";

const AttendancePage = () => {
  const dispatch = useAppDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [youthAttendance, setYouthAttendance] = useState(
    [] as AttendanceRequestType[]
  );
  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceType | null>({} as AttendanceType);
  const { youths } = useAppSelector((state) => state.getYouthsSlice);

  const handleDelete = (attendance: AttendanceType) => {
    setSelectedAttendance(attendance);
    console.table(attendance);
    console.table(selectedAttendance);
    setIsDeleteModal(true);
  };

  const handleEdit = (attendance: AttendanceType) => {
    setSelectedAttendance(attendance);
    setIsEditModal(true);
    console.table(attendance);
  };

  const handleSave = (updatedRecords: { id: string; present: boolean }[]) => {
    console.log("Updated Attendance:", updatedRecords);
    // setAttendanceRecords(updatedRecords); // Save to state or send to backend
  };

  const handleTakeAttendance = () => {
    console.log("Attendance to be submitted:", youthAttendance);
    // TODO: send to backend
  };

  useEffect(() => {
    dispatch(getAttendancesThunk());
    dispatch(getYouthsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AddButton
          text="Take Attendance"
          onClick={() => setIsAddModalOpen(true)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 ">
        <EntityCard value={"25"} title="Highest Attendance" color="green" />
        <EntityCard value={"5"} title="Lowest Attendance" color="red" />
      </div>
      <AttendanceTable
        data={attendanceDummyData}
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
        />
      )}

      {isDeleteModal && (
        <DeleteModal isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
      )}

      <EditAttendanceModal
        isOpen={isEditModal}
        setIsOpen={setIsEditModal}
        members={membersDummyData}
        attendanceRecords={selectedAttendance?.attendanceRecords ?? []}
        onSave={handleSave}
      />
    </div>
  );
};

export default AttendancePage;
