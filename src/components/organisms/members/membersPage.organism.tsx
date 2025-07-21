"use client"
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React from "react";

const MembersPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* <h3 className="text-2xl font-semibold text-slate-900">Members</h3> */}
        <AddButton text="members" onClick={() => {}} />
      </div>
    </div>
  );
};

export default MembersPage;
