import ModalContainer from '@/components/molecules/modal/modal.molecule';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import React from 'react'


interface DeleteModalProps{
    isOpen: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?:()=>void
}

const DeleteModal: React.FC<DeleteModalProps> = ({isOpen , setIsOpen ,onClick}) => {
  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} hideDefaultButtons>
      <div>
        <div className="p-3 bg-red-200">
          <Trash2 className="#b91c1c" size={50} />
        </div>

        <div className="mt-3">
          <h3>Delete</h3>
          <p>Are you sure you want to delete this record?</p>
        </div>

        <div className="flex gap-2 justify-end mt-4">
          <Button
            variant="outline"
            onClick={() => setIsOpen && setIsOpen(false)}
            className='w-full'
          >
            Cancel
          </Button>
          <Button variant={"destructive"} onClick={onClick} className='w-full'>
            Confirm
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal