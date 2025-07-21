"use client"
import AddButton from "@/components/atoms/add-button/add-button.atom";
import React from "react";
import { MembersTable } from "../members-table/members-table.organism";

const MembersPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* <h3 className="text-2xl font-semibold text-slate-900">Members</h3> */}
        <AddButton text="members" onClick={() => {}} />
      </div>
          <MembersTable/>
    </div>
  );
};

export default MembersPage;
