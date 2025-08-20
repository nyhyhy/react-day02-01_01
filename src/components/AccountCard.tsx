import { Link, useNavigate } from "react-router-dom";

interface AccountCardProps {
    id: number;
    name: string;
    accountNo: string;
    type: '입출금' | '예금' | '적금';
    balance: number;
}

function AccountCard({id, name, accountNo, type, balance}: AccountCardProps) {
    const navigate = useNavigate();
    return (
        <div className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-white"
            onClick={() => navigate(`/account/${id}`)}
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <Link to={`/account/${id}`}>
                    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                    </Link>
                    <p className="text-sm text-gray-500">{accountNo}</p>
                </div>
                <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                        {type}
                    </span>
                </div>
            </div>
            <div className="mt-3 pt-3 border-t">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">잔액</span>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">{balance}원</span>
                        <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                            숨기기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountCard;