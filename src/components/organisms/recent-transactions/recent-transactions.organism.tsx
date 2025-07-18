import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RecentTransactionsType } from "@/types/finance.type";

interface RecentTransactionsProps {
  data: RecentTransactionsType[];
}

export  const RecentTransactions:React.FC<RecentTransactionsProps> = ({
  data:transactions
}) => {
  return (
    <Card className="font-sans shadow-none">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-medium ">{tx.description}</p>
              <p className="text-sm text-muted-foreground">{tx.date}</p>
            </div>
            <p
              className={`font-medium  text-sm ${
                tx.type === "income" ? "text-green-600" : "text-red-600"
              }`}
            >
              {tx.type === "income" ? "+" : "-"}{Math.abs(tx.amount)} FCFA
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
