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

interface AddMemberModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <ModalContainer
      title="Add Youth"
      description="Add youths to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={() => console.log("Saved Youth")}
      primaryButtonText="Add Youth"
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" placeholder="Youth name" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="contact-1">Contact</Label>
          <Input
            id="contact"
            name="contact"
            placeholder="Contact"
            type="number"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" placeholder="address" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="address">Occupation</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>occupation</SelectLabel>
                <SelectItem value="apple">student</SelectItem>
                <SelectItem value="banana">employed</SelectItem>
                <SelectItem value="banana">unemployed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="address">role</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>role</SelectLabel>
                <SelectItem value="apple">member</SelectItem>
                <SelectItem value="banana">leader</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddMemberModal;
