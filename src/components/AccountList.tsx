import type { Account } from "../models/Account";
import AccountCard from "./AccountCard";

interface AccountListProps {
    accounts: Account[];
}

function AccountList({accounts}: AccountListProps) {
    return (
        <div className="mb-6">
            {
                accounts.map(account => 
                    <AccountCard 
                        key={account.id}
                        name={account.name}
                        accountNo={account.accountNo}
                        type={account.type}
                        balance={account.balance} 
                    />
                )
            }
        </div>
    );
}

export default AccountList;