import React from "react";

interface FinanceCardProps {
  value: number | string;
  title: string;
  color: "green" | "red" | "blue" | "yellow";
}

const FinanceCard: React.FC<FinanceCardProps> = ({ value, title, color }) => {
  const borderColor = {
    green: "border-l-green-600",
    red: "border-l-red-600",
    blue: "border-l-blue-600",
    yellow: "border-l-yellow-600",
  };
  return (
    <div
      className={`flex items-center w-full h-full p-4 bg-white rounded-md gap-2 border-l-4 border ${borderColor[color]}`}
    >
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default FinanceCard;
