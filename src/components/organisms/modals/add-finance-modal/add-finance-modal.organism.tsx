import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AddFinanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddFinanceModal: React.FC<AddFinanceModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <ModalContainer
      title="Record Financial Information"
      description="Add financial information to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={() => console.log("Saved Youth")}
      primaryButtonText="Record Finance"
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="type">Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>type</SelectLabel>
                <SelectItem value="apple">income</SelectItem>
                <SelectItem value="banana">expense</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="title">title</Label>
          <Input id="title" name="title" placeholder="Ex. Offering" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" name="amount" placeholder="Amount" type="number" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" placeholder="date" type="date" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="address">description(optional)</Label>
          <Textarea placeholder="Type your description here." />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="recordedBy">Recorded By</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Youth" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>youths</SelectLabel>
                <SelectItem value="apple">Joseph</SelectItem>
                <SelectItem value="banana">Mary</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddFinanceModal;
