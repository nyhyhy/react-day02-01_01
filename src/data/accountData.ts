// src/data/accounts.ts
import type { Account } from '../models/Account';

export const accounts: Account[] = [
  {
    id: 1,
    name: '급여통장',
    accountNo: '123-456-789012',
    type: '입출금',
    balance: 3456780,
    isActive: true,
    isHidden: false,
  },
  {
    id: 2,
    name: '생활비통장',
    accountNo: '234-567-890123',
    type: '입출금',
    balance: 890500,
    isActive: true,
    isHidden: false,
  },
  {
    id: 3,
    name: '비상금통장',
    accountNo: '456-789-012345',
    type: '예금',
    balance: 500000,
    isActive: true,
    isHidden: true,
  },
  {
    id: 4,
    name: '해지예정계좌',
    accountNo: '567-890-123456',
    type: '입출금',
    balance: 0,
    isActive: false,
    isHidden: false,
  },
];