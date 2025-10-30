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
import { FinanceRequestType } from "@/types/finance.type";

interface AddFinanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  updateForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: FinanceRequestType;
  setForm: React.Dispatch<React.SetStateAction<FinanceRequestType>>;
  handleAddFinance?: () => void;
  loading?: boolean;
}

export const AddFinanceModal: React.FC<AddFinanceModalProps> = ({
  isOpen,
  setIsOpen,
  updateForm,
  form,
  setForm,
  handleAddFinance,
  loading,
}) => {
  return (
    <ModalContainer
      title="Record Financial Information"
      description="Add financial information to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleAddFinance}
      primaryButtonText="Record Finance"
      loading={loading}
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="type">Type</Label>
          <Select
            name="type"
            value={form.type}
            onValueChange={(value) => setForm({ ...form, type: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>type</SelectLabel>
                <SelectItem value="INCOME">income</SelectItem>
                <SelectItem value="EXPENSE">expense</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="title">title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Ex. Offering"
            value={form.title}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            name="amount"
            placeholder="Amount"
            type="number"
            value={form.amount}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            placeholder="date"
            type="date"
            value={form.date}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">description(optional)</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type your description here."
            value={form.description}
            onChange={updateForm}
          />
        </div>
        {/* <div className="grid gap-3">
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
        </div> */}
      </div>
    </ModalContainer>
  );
};

export default AddFinanceModal;
