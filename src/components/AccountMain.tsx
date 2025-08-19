import { useState } from "react";
import AccountList from "./AccountList";
import AccountOption from "./AccountOption";
import AccountSummary from "./AccountSummary";

function AccountMain() {
    // 컨테이너임
    // 여기서 백엔드 데이터를 가지고 와서..
    const [accounts, setAccounts] = useState([]);
    return (
        <main className="py-8">
            <div className="max-w-2xl mx-auto p-6">
                <AccountOption/>
                <AccountList accounts={accounts}/>
                <AccountSummary/>
            </div>
        </main>
    );
}

export default AccountMain;