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

interface AddProgramModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddProgramModal: React.FC<AddProgramModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <ModalContainer
      title="Record Program"
      description="Add  program information to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={() => console.log("Saved Youth")}
      primaryButtonText="Save Program"
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">name</Label>
          <Input id="name" name="name" placeholder="Ex. Offering" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="attendance">Attendance Count</Label>
          <Input
            id="attendance"
            name="attendance"
            placeholder="Attendance"
            type="number"
          />
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
          <Label htmlFor="recordedBy">Status</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>status</SelectLabel>
                <SelectItem value="upcoming">upcoming</SelectItem>
                <SelectItem value="completed">completed</SelectItem>
                <SelectItem value="canceled">canceled</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="grid gap-3">
            <Label htmlFor="address">Review</Label>
            <Textarea placeholder="Type your review here." />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddProgramModal;
