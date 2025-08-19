import type { Account } from "../models/Account";
import AccountCard from "./AccountCard";

/**
 * Account 목록을 카드 형태로 렌더링하는 프레젠테이셔널 컴포넌트
 * - 각 항목은 `AccountCard`로 표현됩니다.
 */
interface AccountListProps {
    accounts: Account[];
}

/**
 * 주어진 `accounts` 배열을 순회하며 `AccountCard`를 출력합니다.
 * @param accounts 렌더링할 계좌 목록
 */
function AccountList({accounts}: AccountListProps) {
    return (
        <div className="mb-6">
            {accounts.map(({ id, name, accountNo, type, balance }) => (
                <AccountCard
                    key={id}
                    name={name}
                    accountNo={accountNo}
                    type={type}
                    balance={balance}
                />
            ))}
        </div>
    );
}

export default AccountList;