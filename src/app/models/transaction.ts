export interface Transaction {
  id?: number;          // backend antaa id:n, joten se on valinnainen
  type: string;         // "income" tai "expense"
  description: string;
  amount: number;
  date?: string;        // ISO string, valinnainen, backend voi asettaa nykyisen päivän
}
