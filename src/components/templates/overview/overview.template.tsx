import BottomStats from "@/components/organisms/overview/bottom-stats/bottom-stats.organism";
import TopStats from "@/components/organisms/overview/top-stats/top-stats.organism";
import {
  chartData,
  transactionsData,
  upcomingProgramsData,
} from "@/constants/data";
import { CircleDollarSign, TrendingUp, Users } from "lucide-react";
import React from "react";

const OverviewTemplate = () => {
  const topStatsData = [
    {
      title: "Active Members",
      icon: <Users className="text-green-400" />,
      value: 30,
      link:"/members"
    },
    {
      title: "Income",
      icon: <CircleDollarSign className="text-violet-400" />,
      value: "5,000 CFA",
      link:"/finance"
    },
    {
      title: "Balance",
      icon: <TrendingUp className="text-blue-400" />,
      value: "700 CFA",
      link:"/finance"
    },
    {
      title: "Attendance %",
      icon: <CircleDollarSign className="text-orange-400" />,
      value: "67%",
      link:"/attendance"
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <TopStats data={topStatsData} />
      <BottomStats
        attendanceData={chartData}
        transactionsData={transactionsData}
        upcomingProgramsData={upcomingProgramsData}
      />
    </div>
  );
};

export default OverviewTemplate;
