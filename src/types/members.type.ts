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
  phone: null | string ;
  isActive: boolean;
  role: string | null;
  occupation: string | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
};


export type YouthRequestType = {
name:string,
gender:string,
phone:string,
role:string,
occupation:string,
address:string
}

