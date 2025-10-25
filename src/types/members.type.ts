export type MembersType = {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  status: "active" | "inactive";
  occupation: "student" | "employed" | "unemployed";
  role: string[];
};


export type YouthsResponseType = {
  id: string;
  name: string;
  gender: null | string;
  age: null | string | number;
  phone: null | string | number;
  isActive: boolean;
  role: string | null;
  occupation: string | null;
  createdAt: Date;
  updatedAt: Date;
};

