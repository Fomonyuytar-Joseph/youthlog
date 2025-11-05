export interface AttendanceChartType {
  day: string;
  attendees: number;
}

export type AttendanceType = {
  id: string;
  date: string;
  present: number | string;
  total: number | string;
  absent?: number | string;
  attendanceRecords?: { id: string; present: boolean }[];
};

export type AttendanceRequestType = {
  youthId: string;
  date: string;
  type: string;
  present: boolean;
};

export type AddAttendanceResponseType = {
  message: string;
  count: number | string;
};

export interface GetAttendanceResponse {
  summary: SummaryType[];
  highestAttendance: number;
  lowestAttendance: number;
}

export interface SummaryType {
  date: Date;
  present: number;
  absent: number;
}

