import { useState } from "react";
import AccountList from "./AccountList";
import AccountOption from "./AccountOption";
import AccountSummary from "./AccountSummary";
import { accounts } from "../data/accountData";
import type { Account } from "../models/Account";

function AccountMain() {
    // 컨테이너임
    // 여기서 백엔드 데이터를 가지고 와서..
    const accountList: Account[] = accounts;

    const calcTotalSum = () => {
        // accountList에서 잔고를 모두 더해서 결과를 리턴한다.
        return accountList.reduce((sum, account) => sum + account.balance, 0);
    };

    return (
        <main className="py-8">
            <div className="max-w-2xl mx-auto p-6">
                <AccountOption numberOfAccount={accountList.length}/>
                <AccountList accounts={accountList}/>
                <AccountSummary totalSum={calcTotalSum()}/>
            </div>
        </main>
    );
}

export default AccountMain;