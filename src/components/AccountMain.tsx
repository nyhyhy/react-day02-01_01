import AccountList from "./AccountList";
import AccountOption from "./AccountOption";
import AccountSummary from "./AccountSummary";
import useAccountStore, { type AccountStore } from "../store/useAccountStore";

function AccountMain() {
    // 컨테이너: 전역 스토어(Zustand)에서 상태와 파생 동작을 구독
    const accountList = useAccountStore((s: AccountStore) => s.accounts);
    const calcTotalSum = useAccountStore((s: AccountStore) => s.calcTotalSum);
    const getAccountCount = useAccountStore((s: AccountStore) => s.getAccountCount);

    return (
        <main className="py-8">
            <div className="max-w-2xl mx-auto p-6">
                <AccountOption numberOfAccount={getAccountCount()} />
                <AccountList accounts={accountList} />
                <AccountSummary totalSum={calcTotalSum()} />
            </div>
        </main>
    );
}

export default AccountMain;