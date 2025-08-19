function AccountList({accounts}) {
    return (
        <>
            <div className="mb-6">
                {/*계좌 1: 급여통장 */}
                <div className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">급여통장</h3>
                            <p className="text-sm text-gray-500">123-456-789012</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                                입출금
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">잔액</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">3,456,780원</span>
                                <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                                    숨기기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*계좌 2: 생활비통장*/}
                <div className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">생활비통장</h3>
                            <p className="text-sm text-gray-500">234-567-890123</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                                입출금
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">잔액</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">890,500원</span>
                                <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                                    숨기기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*계좌 3: 적금통장 */}
                <div className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">적금통장</h3>
                            <p className="text-sm text-gray-500">345-678-901234</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-800">
                                적금
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">잔액</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">12,000,000원</span>
                                <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                                    숨기기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*계좌 4: 비상금통장 */}
                <div className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">비상금통장</h3>
                            <p className="text-sm text-gray-500">456-789-012345</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-purple-100 text-purple-800">
                                예금
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">잔액</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">******</span>
                                <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                                    보기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*계좌 5: 비활성 계좌 (숨김 상태) */}
                <div
                    className="border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow bg-gray-50 opacity-60 hidden">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">해지예정계좌</h3>
                            <p className="text-sm text-gray-500">567-890-123456</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                                입출금
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800 font-medium">
                                비활성
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">잔액</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">0원</span>
                                <button className="text-xs text-blue-600 hover:text-blue-800 underline">
                                    숨기기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountList;