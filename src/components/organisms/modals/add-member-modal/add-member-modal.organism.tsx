import { Button } from "@/components/ui/button";
import {
  Dialog,
  //   DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  //   DialogTrigger,
} from "@/components/ui/dialog";
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogContent
          className="sm:max-w-[425px]"
          onClose={() => setIsOpen && setIsOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Add Youth</DialogTitle>
            <DialogDescription>Add Youths to the System</DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            {/* <DialogClose asChild> */}
            <Button
              variant="outline"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              Cancel
            </Button>
            {/* </DialogClose> */}
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddMemberModal;
