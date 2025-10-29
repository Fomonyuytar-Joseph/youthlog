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
import { YouthRequestType } from "@/types/members.type";

interface AddMemberModalProps {
  isOpen: boolean;
  updateForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: YouthRequestType;
  setForm: React.Dispatch<React.SetStateAction<YouthRequestType>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddYouth?: () => void;
  loading?: boolean;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  setIsOpen,
  updateForm,
  form,
  setForm,
  handleAddYouth,
  loading,
}) => {
  return (
    <ModalContainer
      title="Add Youth"
      description="Add youths to the Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleAddYouth}
      primaryButtonText="Add Youth"
      loading={loading}
    >
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input
            id="name-1"
            name="name"
            placeholder="Youth name"
            value={form.name}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="contact-1">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Phone number"
            type="number"
            value={form.phone}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="address"
            value={form.address}
            onChange={updateForm}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="gender">Gender</Label>
          <Select
            name="gender"
            value={form.gender}
            onValueChange={(val) => {
              setForm({ ...form, gender: val });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>gender</SelectLabel>
                <SelectItem value="MALE">MALE</SelectItem>
                <SelectItem value="FEMALE">FEMALE</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="occupation">Occupation</Label>
          <Select
            name="occupation"
            value={form.occupation}
            onValueChange={(val) => {
              setForm({ ...form, occupation: val });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>occupation</SelectLabel>
                <SelectItem value="STUDENT">student</SelectItem>
                <SelectItem value="EMPLOYED">employed</SelectItem>
                <SelectItem value="UNEMPLOYED">unemployed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="address">role</Label>
          <Select
            name="role"
            value={form.role}
            onValueChange={(val) => {
              setForm({ ...form, role: val });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>role</SelectLabel>
                <SelectItem value="MEMBER">member</SelectItem>
                <SelectItem value="PRESIDENT">President</SelectItem>
                <SelectItem value="VICE_PRESIDENT">Vice President</SelectItem>
                <SelectItem value="SECRETARY">Secretary</SelectItem>
                <SelectItem value="VICE_SECRETARY">vice Secretary</SelectItem>
                <SelectItem value="TREASURER">Treasurer</SelectItem>
                <SelectItem value="FINANCIAL_SECRETARY">
                  Financial secretary
                </SelectItem>
                <SelectItem value="SPIRITUAL_COORDINATOR">
                  Spiritual Coordinator
                </SelectItem>
                <SelectItem value="VICE_SPIRITUAL_COORDINATOR">
                  Vice Spiritual Coordinator
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddMemberModal;
