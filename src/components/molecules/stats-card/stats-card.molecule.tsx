import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  value: number | string;
  iconClassName?: string;
  link:string
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  icon,
  value,
  iconClassName = "",
  link
}) => {
  return (
    <Card className={"w-full font-sans shadow-none"}>
      <CardHeader className={"flex items-center justify-between"}>
        <div className="flex items-center gap-4">
          <div
            className={`p-2 flex items-center justify-center rounded-md ${iconClassName}`}
          >
            {icon}
          </div>
          <CardTitle className="font-sans">{title}</CardTitle>
        </div>


        <Link href={link}>
        <SquareArrowOutUpRight className="text-gray-400 cursor-pointer" />
        </Link>

      </CardHeader>
      <CardContent>
        <h2 className={"font-bold text-2xl text-gray-900 font-sans"}>
          {value}
        </h2>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
