interface AccountSummaryProps {
    totalSum: number;
}

function AccountSummary({totalSum}: AccountSummaryProps) {
    return (
        <>
            <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">
                        총 잔액
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                        {totalSum}원
                    </span>
                </div>
            </div>
        </>
    );
}

export default AccountSummary;