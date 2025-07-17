import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  active: boolean;
  text: string;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  active,
  text,
  icon,
}) => {
  return (
    <Link
      href={href}
      className={`${
        active
          ? "bg-primary text-white"
          : "bg-transparent text-slate-600 text-lg hover:bg-[#f4f4f5]"
      } p-3 w-full text-center rounded-md flex items-start gap-4`}
    >
      {icon && <span className="">{icon}</span>}
      {text}
    </Link>
  );
};

export default LinkButton;
