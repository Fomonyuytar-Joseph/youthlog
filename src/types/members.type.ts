export type MembersType = {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  status: "active" | "inactive";
  occupation: "student" | "employed" | "unemployed";
  role: string[];
};

