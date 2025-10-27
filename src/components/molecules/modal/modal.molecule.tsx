import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface ModalContainerProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  children?: React.ReactNode;
  hideDefaultButtons?: boolean;
  loading?: boolean;
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
  hideDefaultButtons = false,
  loading,
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
          {!hideDefaultButtons && (
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsOpen && setIsOpen(false)}
              >
                {secondaryButtonText}
              </Button>
              <Button
                type="submit"
                onClick={onPrimaryButtonClick}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading ...
                  </>
                ) : (
                  primaryButtonText
                )}
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ModalContainer;
