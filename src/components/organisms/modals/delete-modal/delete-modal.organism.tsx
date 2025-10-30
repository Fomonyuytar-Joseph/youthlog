import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Trash2 } from "lucide-react";
import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
  loading?: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  setIsOpen,
  onClick,
  loading,
}) => {
  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} hideDefaultButtons>
      <div className="text-center flex flex-col gap-3">
        <div className="p-2 bg-red-200 w-fit rounded-full text-center flex items-center justify-center mx-auto">
          <Trash2 className="text-destructive" size={25} />
        </div>

        <div className="mt-3">
          <h3 className="font-bold text-xl">Delete</h3>
          <p className="mt-1">Are you sure you want to delete this record?</p>
        </div>

        <div className="flex gap-2 mt-4 ">
          <Button
            variant="outline"
            onClick={() => setIsOpen && setIsOpen(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            onClick={onClick}
            className="cursor-pointer flex-1"
          >
            {loading ? (
              <>
                <Spinner />
                Confirming...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
