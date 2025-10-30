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
  date: Date;
  type: "income" | "expense";
};


export type FinanceRequestType = {
  type: string;
  // type: "INCOME" | "EXPENSE";
  amount: number | string;
  date: string ;
  title:string;
  description?: string;
};

export type FinanceResponseType = {
  id: string;
  type: string;
  amount: number | string;
  title:string;
  description?: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
};