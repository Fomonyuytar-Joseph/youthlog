import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

export type FinanceType = {
  id: string;
  name: string;
  amount: string | number;
  date: Date;
  type: "income" | "expense";
  description?: string;
  recordedBy?: string;
};

interface EditFinanceModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  finance: FinanceType | null;
  onSave: (updatedFinance: FinanceType) => void;
  recordedByOptions?: string[]; // list of youths
}

export const EditFinanceModal: React.FC<EditFinanceModalProps> = ({
  isOpen,
  setIsOpen,
  finance,
  onSave,
  recordedByOptions = ["Joseph", "Mary"],
}) => {
  const [formData, setFormData] = useState<FinanceType | null>(null);

  useEffect(() => {
    if (finance) setFormData(finance);
  }, [finance]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (field: keyof FinanceType, value: string) => {
    if (!formData) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData({ ...formData, [field]: value as any  });
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
      setIsOpen?.(false);
    }
  };

  if (!formData) return null;

  return (
    <ModalContainer
      title="Edit Financial Information"
      description="Update financial information"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleSave}
      primaryButtonText="Save Changes"
    >
      <div className="grid gap-4">
        {/* Type */}
        <div className="grid gap-3">
          <Label htmlFor="type">Type</Label>
          <Select
            value={formData.type}
            onValueChange={(val) => handleSelectChange("type", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Name / Title */}
        <div className="grid gap-3">
          <Label htmlFor="name">Title</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ex. Offering"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Amount */}
        <div className="grid gap-3">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            name="amount"
            placeholder="Amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="grid gap-3">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={
              formData?.date ? formData.date.toISOString().substring(0, 10) : ""
            } // YYYY-MM-DD
            onChange={(e) =>
              setFormData({ ...formData, date: new Date(e.target.value) })
            }
          />
        </div>

        {/* Description */}
        <div className="grid gap-3">
          <Label htmlFor="description">Description (optional)</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type your description here."
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>

        {/* Recorded By */}
        <div className="grid gap-3">
          <Label htmlFor="recordedBy">Recorded By</Label>
          <Select
            value={formData.recordedBy || ""}
            onValueChange={(val) => handleSelectChange("recordedBy", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Youth" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Youths</SelectLabel>
                {recordedByOptions.map((youth) => (
                  <SelectItem key={youth} value={youth}>
                    {youth}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditFinanceModal;
