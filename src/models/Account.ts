// src/models/Account.ts
export interface Account {
  id: number;
  name: string;
  accountNo: string;
  type: '입출금' | '예금' | '적금';
  balance: number;
  isActive: boolean;
  isHidden: boolean;
}