export interface RecentTransactionsType{
    id:number;
    description:string;
    amount:number;
    date:string;
    type:string;
}


export type FinanceType = {
  id: string;
  name: string;
  amount: string | number;
  date: string;
  type: "income" | "expense";
};