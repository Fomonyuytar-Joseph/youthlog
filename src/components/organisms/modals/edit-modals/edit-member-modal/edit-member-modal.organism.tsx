import ModalContainer from "@/components/molecules/modal/modal.molecule";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { YouthsResponseType } from "@/types/members.type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditMemberModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  member: YouthsResponseType | null;
  onSave: (updatedType: YouthsResponseType) => void;
  availableRoles: string[];
}

export const EditMemberModal: React.FC<EditMemberModalProps> = ({
  isOpen,
  setIsOpen,
  member,
  onSave,
  availableRoles,
}) => {
  const [formData, setFormData] = useState<YouthsResponseType | null>(null);

  // ✅ Ensure "member" role is always present
  useEffect(() => {
    // if (member) {
    //   const roles = member.role ?? []; // fallback to empty array
    //   setFormData({
    //     ...member,
    //     role: roles.includes("member") ? roles : ["member", ...roles],
    //   });
    // }
  }, [member]);

  const toggleRole = (role: string) => {
    if (!formData) return;
    // Don't allow removing "member"
    if (role === "member") return;

    // const hasRole = formData.role.includes(role);
    // setFormData({
    //   ...formData,
    //   role: hasRole
    //     ? formData.role.filter((r) => r !== role) // remove
    //     : [...formData.role, role], // add
    // });
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
      title="Edit Youth"
      description="Update youth details"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onPrimaryButtonClick={handleSave}
      primaryButtonText="Save Changes"
    >
      <div className="grid gap-4">
        {/* Example: Name */}
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Youth name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="name">Contact</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="62343413"
            value={formData.phone ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="bokwaongo"
            value={formData.address ?? ""}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="occupation">Occupation</Label>
          <Select
            value={formData.occupation ?? ""} // ✅ occupation comes from member
            onValueChange={(val) =>
              setFormData((prev) =>
                prev
                  ? {
                      ...prev,
                      occupation: val as YouthsResponseType["occupation"],
                    }
                  : prev
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Occupation</SelectLabel>
                <SelectItem value="STUDENT">Student</SelectItem>
                <SelectItem value="EMPLOYED">Employed</SelectItem>
                <SelectItem value="UNEMPLOYED">Unemployed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="occupation">Status</Label>
          <Select
            value={formData.isActive ? "Active" : "InActive"}
            onValueChange={(val) => {
              const option = val === "active";
              setFormData({ ...formData, isActive: option });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">inActive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Roles */}
        <div className="grid gap-3">
          <Label>Roles</Label>
          <div className="flex flex-wrap gap-3">
            {availableRoles.map((role) => (
              <div key={role} className="flex items-center gap-2">
                <Checkbox
                  id={role}
                  checked={availableRoles.includes(formData.role ?? '')}
                  disabled={role === "member"} // ✅ "member" is always checked, can't be unchecked
                  onCheckedChange={() => toggleRole(role)}
                />
                <Label htmlFor={role}>{role}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
