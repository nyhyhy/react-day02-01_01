interface AccountOptionProps {
    numberOfAccount: number;
}

function AccountOption({numberOfAccount}: AccountOptionProps) {
    return (
        <>
            {/*헤더 섹션*/}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">내 계좌 목록</h2>
                <p className="text-gray-600">총 {numberOfAccount}개의 계좌</p>
            </div>

            {/*필터 및 정렬 옵션*/}
            <div className="mb-4 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700">정렬:</label>
                    <select className="text-sm border rounded px-2 py-1">
                        <option value="name">계좌명순</option>
                        <option value="balance">잔액순</option>
                    </select>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">비활성 계좌 포함</span>
                </label>
            </div>
        </>
    );
}

export default AccountOption;