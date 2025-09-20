export interface UpcomingProgramsType {
    id: number;
    name:string;
    date: string;
    status: string;
} 

export type ProgramType = {
  id: string;
  name: string;
  date: Date;
  attendanceCount: string;
  status: "upcoming" | "completed" | "cancelled";
  description?: string;
  review?:string;
};