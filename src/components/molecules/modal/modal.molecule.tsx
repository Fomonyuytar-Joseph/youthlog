import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalContainerProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  children?: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  setIsOpen,
  title,
  description,
  primaryButtonText = "Save changes",
  secondaryButtonText = "Cancel",
  onPrimaryButtonClick,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogContent
          className="sm:max-w-[525px]"
          onClose={() => setIsOpen && setIsOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {secondaryButtonText}
            </Button>
            <Button type="submit" onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ModalContainer;
