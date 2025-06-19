import React from "react";

export const InputBox = ({
    amountType,
    amount,
    setAmount,
    currencyOptions,
    selectedCurrency,
    setCurrency,
    isDisabled,
}) => {
    return (
        <div className="bg-slate-100 shadow-md flex justify-between gap-4 m-4 p-6 rounded-2xl">
            <div className="flex flex-col gap-2 w-1/2">
                <label className="text-slate-700 text-sm font-medium">
                    {amountType}
                </label>
                <input
                    readOnly={isDisabled}
                    type="number"
                    placeholder="0"
                    value={amount === 0 ? "" : amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 bg-white text-slate-800"
                />
            </div>

            <div className="flex flex-col gap-2 w-1/2">
                <label className="text-slate-700 text-sm font-medium">
                    Currency Type
                </label>
                <select
                    onChange={(e) => setCurrency(e.target.value)}
                    value={selectedCurrency}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 bg-white text-slate-800"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
