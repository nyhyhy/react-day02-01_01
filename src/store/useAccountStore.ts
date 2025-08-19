// src/store/useAccountStore.ts
import { create, type StateCreator, type SetState, type GetState } from 'zustand';
import type { Account } from '../models/Account';
import { accounts as initialAccounts } from '../data/accountData';

export type AccountStore = {
  accounts: Account[];
  // 액션(파생 동작)
  calcTotalSum: () => number;
  getAccountCount: () => number;
};

const creator: StateCreator<AccountStore, [], [], AccountStore> = (
  set: SetState<AccountStore>,
  get: GetState<AccountStore>
) => ({
  accounts: initialAccounts,
  calcTotalSum: () => get().accounts.reduce((sum: number, a: Account) => sum + a.balance, 0),
  getAccountCount: () => get().accounts.length,
});

const useAccountStore = create<AccountStore>(creator);

export default useAccountStore;
