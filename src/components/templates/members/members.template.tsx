"use client";
import MembersPage from "@/components/organisms/members/members-page.organism";
import { getYouthsThunk } from "@/features/youths/get-youths/thunks/get-youths.thunk";
import { useAppDispatch } from "@/lib/hooks/use-app";
import React, { useEffect } from "react";

const MembersTemplate = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = "Members - Youth Management System";
    dispatch(getYouthsThunk());

  }, [dispatch]);
  return <MembersPage />;
};

export default MembersTemplate;
