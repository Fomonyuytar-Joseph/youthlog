export interface AttendanceChartType{
    day:string;
    attendees:number;
}

export type AttendanceType = {
  id: string;
  date: string;
  present: number | string;
  total: number | string;
  absent?: number | string;
  attendanceRecords?: { id: string; present: boolean }[];
};