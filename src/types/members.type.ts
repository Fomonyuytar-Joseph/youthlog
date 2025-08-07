export type MembersType = {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  status: "active" | "inactive";
  role: string[];
};