import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

interface AddButtonProps {
  onClick?: () => void;
  text: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      className="rounded-md flex gap-2 py-5 text-white bg-primary w-fit text-base items-center justify-center"
      onClick={onClick}
    >
      <CirclePlus className={"!w-5 !h-5"}/>
      {`Add ${text}`}
    </Button>
  );
};

export default AddButton;
