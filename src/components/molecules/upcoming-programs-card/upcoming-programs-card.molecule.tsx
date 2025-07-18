import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UpcomingProgramsType } from "@/types/programs.type";

interface UpcomingProgramsProps {
  data: UpcomingProgramsType[];
}

export const UpcomingProgramsCard: React.FC<UpcomingProgramsProps> = ({
  data: upcomingPrograms,
}) => {
  return (
    <Card className="font-sans shadow-none">
      <CardHeader>
        <CardTitle>Upcoming Programs</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {upcomingPrograms.map((program) => (
          <div
            key={program.id}
            className="flex items-center justify-between border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-medium">{program.name}</p>
              <p className="text-sm text-muted-foreground">{program.date}</p>
            </div>

            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              {program.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpcomingProgramsCard;
