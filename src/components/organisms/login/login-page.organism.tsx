"use client";
import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import LoginForm from "../login-form/login-form.organism";

const LoginPage = () => {
  return (
    <div className="min-w-full md:min-w-[450px] lg:min-w-[540px] px-4 mt-20">
      <div className="flex items-center justify-center gap-2 self-center font-medium mb-6">
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        YouthLog
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
