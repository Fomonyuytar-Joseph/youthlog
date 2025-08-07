import { MembersType } from "@/types/members.type";

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
    role: ["member", "leader"],
  },
  {
    id: "3u1reuv4",
    name: "Nancy Turner",
    status: "inactive",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "leader"],
  },
  {
    id: "derv1ws0",
    name: "Mario Newton",
    status: "active",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "leader"],
  },
  {
    id: "5kma53ae",
    name: "Etta McDonald",
    status: "inactive",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "leader"],
  },
  {
    id: "bhqecj4p",
    name: "Corey Fisher",
    status: "active",
    phoneNumber: "651273636",
    address: "Bokwaongo Market",
    role: ["member", "leader"],
  },
];
