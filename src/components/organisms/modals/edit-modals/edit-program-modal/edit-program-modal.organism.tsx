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
import { ProgramType } from "@/types/programs.type";

interface EditProgramModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  program: ProgramType | null;
  onSave: (updatedProgram: ProgramType) => void;
}

export const EditProgramModal: React.FC<EditProgramModalProps> = ({
  isOpen,
  setIsOpen,
  program,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProgramType | null>(null);

  useEffect(() => {
    if (program) setFormData(program);
  }, [program]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (field: keyof ProgramType, value: string) => {
    if (!formData) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData({ ...formData, [field]: value as any });
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
      title="Edit Program"
      description="Update program information"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleSave}
      primaryButtonText="Save Changes"
    >
      <div className="grid gap-4">
        {/* Name */}
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ex. Offering"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Attendance Count */}
        <div className="grid gap-3">
          <Label htmlFor="attendanceCount">Attendance Count</Label>
          <Input
            id="attendanceCount"
            name="attendanceCount"
            type="number"
            placeholder="Attendance"
            value={formData.attendanceCount}
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
            }
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

        {/* Status */}
        <div className="grid gap-3">
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status}
            onValueChange={(val) => handleSelectChange("status", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Review */}
        <div className="grid gap-3">
          <Label htmlFor="review">Review</Label>
          <Textarea
            id="review"
            name="review"
            placeholder="Type your review here."
            value={formData.review || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditProgramModal;
