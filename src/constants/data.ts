import { AttendanceType } from "@/types/attendance.type";
import { FinanceType } from "@/types/finance.type";
import { MembersType } from "@/types/members.type";
import { ProgramType } from "@/types/programs.type";

export const chartData = [
  { day: "Jun 17", attendees: 20 },
  { day: "Jun 24", attendees: 25 },
  { day: "Jul 1", attendees: 15 },
  { day: "Jul 8", attendees: 30 },
];

export const upcomingProgramsData = [
  {
    id: 1,
    name: "Youth Revival Night",
    date: "Aug 10, 2025",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Bible Study Retreat",
    date: "Aug 28, 2025",
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Community Outreach",
    date: "Sep 5, 2025",
    status: "Upcoming",
  },
];


export const transactionsData = [
  {
    id: 1,
    description: "Offering",
    amount: 5000,
    date: "Jul 7, 2025",
    type: "income",
  },
  {
    id: 2,
    description: "Feeding for Field Program",
    amount: 2000,
    date: "Jul 5, 2025",
    type: "expense",
  },
  {
    id: 3,
    description: "Transportation for Youth Camp",
    amount: 1500,
    date: "Jul 4, 2025",
    type: "expense",
  },
];

export const membersDummyData: MembersType[] = [
  {
    id: "m5gr84i9",
    name: "Jerome Bradley",
    status: "active",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "president"],
    occupation: "employed",
  },
  {
    id: "3u1reuv4",
    name: "Nancy Turner",
    status: "inactive",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "secretary"],
    occupation: "employed",
  },
  {
    id: "derv1ws0",
    name: "Mario Newton",
    status: "active",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "treasurer"],
    occupation: "student",
  },
  {
    id: "5kma53ae",
    name: "Etta McDonald",
    status: "inactive",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "leader"],
    occupation: "unemployed",
  },
  {
    id: "bhqecj4p",
    name: "Corey Fisher",
    status: "active",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member"],
    occupation: "employed",
  },
];


export const attendanceDummyData: AttendanceType[] = [
  {
    id: "bdb9ec6f-bdce-52ab-8adc-50cddd6749b6",
    date: "8/29/2045",
    present: 31,
    total: 50,
    absent: 19,
  },
  {
    id: "bdb9ec6f-bdce-52ab-8adc-50cddd6749b6",
    date: "8/29/2045",
    present: 10,
    total: 50,
    absent:4,
  },
  {
    id: "bdb9ec6f-bdce-52ab-8adc-50cddd6749b6",
    date: "8/29/2045",
    present: 5,
    total: 50,
    absent:10,
  },
];

export const financeDummyData: FinanceType[] = [
  {
    id: "1e62256a-36ec-5b13-b367-721e4632e9b5",
    name: "Food for Association",
    amount: "12,000",
    date: new Date(),
    type: "expense",
  },
  {
    id: "8fdfd659-3cf8-5ed1-973c-0da70de78fd1",
    name: "Zachary Schneider",
    amount: "496",
    date: new Date(),
    type: "income",
  },
  {
    id: "841a3a85-d172-59df-abbc-995679902ed9",
    name: "Micheal Osborne",
    amount: "710",
    date: new Date(),
    type: "expense",
  },
  {
    id: "d2a1bf68-613e-548a-b7f7-f11ea84b4fbb",
    name: "Ernest Warner",
    amount: "609",
    date: new Date(),
    type: "income",
  },
];

export const programsDummyData: ProgramType[] = [
  {
    id: "bdb9ec6f-bdce-52ab-8adc-50cddd6749b6",
    name: "Prayer Conference",
    date: new Date(),
    attendanceCount: "31",
    status: "upcoming",
  },
  {
    id: "7442c113-e54e-59f3-af24-a73f61a07fe0",
    name: "Bible Study",
    date: new Date(),
    attendanceCount: "55",
    status: "completed",
  },
  {
    id: "c0e3078b-4df0-572b-afc2-9e62da4f053d",
    name: "Picnic",
    date: new Date(),
    attendanceCount: "56",
    status: "cancelled",
  },
];