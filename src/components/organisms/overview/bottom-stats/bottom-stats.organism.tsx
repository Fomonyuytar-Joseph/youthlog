import React from "react";
import { AttendanceChart } from "../../attendance-chart/attendance-chart.organism";
import { RecentTransactions } from "../../recent-transactions/recent-transactions.organism";
import { UpcomingProgramsCard } from "@/components/molecules/upcoming-programs-card/upcoming-programs-card.molecule";
import { AttendanceChartType } from "@/types/attendance.type";
import { RecentTransactionsType } from "@/types/finance.type";
import { UpcomingProgramsType } from "@/types/programs.type";


interface BottomStatsProps {
  attendanceData: AttendanceChartType[];
  transactionsData: RecentTransactionsType[];
  upcomingProgramsData: UpcomingProgramsType[];
}

const BottomStats:React.FC<BottomStatsProps> = ({
  attendanceData,
  transactionsData,
  upcomingProgramsData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AttendanceChart data={attendanceData} />
      <RecentTransactions data={transactionsData} />
      <UpcomingProgramsCard data={upcomingProgramsData}/>
    </div>
  );
};

export default BottomStats;
