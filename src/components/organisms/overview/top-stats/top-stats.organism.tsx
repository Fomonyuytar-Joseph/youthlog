import StatsCard from "@/components/molecules/stats-card/stats-card.molecule";
import React from "react";

interface TopStatsProps {
  data: {
    title: string;
    icon: React.ReactNode;
    value: number | string;
  }[];
}

const TopStats: React.FC<TopStatsProps> = (data) => {
  const iconColor = {
    "Active Members": "bg-green-100",
    Income: "bg-violet-100 ",
    Balance: "bg-blue-100",
    "Attendance %": "bg-orange-100",
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.data.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          icon={stat.icon}
          value={stat.value}
          iconClassName={iconColor[stat.title as keyof typeof iconColor]}
        />
      ))}
    </div>
  );
};

export default TopStats;
