import { useState, useEffect } from "react";
import { InputBox } from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";

function App() {
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");

    const currencyInfo = useCurrency(fromCurrency);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        const result = (fromAmount * currencyInfo[toCurrency]).toFixed(2);
        setToAmount(result);
    };

    return (
        <div className="h-screen bg-slate-900 flex justify-center items-center">
            <div className="bg-slate-500 w-[450px] h-[350px] rounded-2xl shadow-2xl shadow-cyan-500/50 flex flex-col">
                <InputBox
                    amountType="From"
                    amount={fromAmount}
                    setAmount={setFromAmount}
                    currencyOptions={options}
                    selectedCurrency={fromCurrency}
                    setCurrency={setFromCurrency}
                    isDisabled={false}
                />
                <InputBox
                    amountType="To"
                    amount={toAmount}
                    currencyOptions={options}
                    selectedCurrency={toCurrency}
                    setCurrency={setToCurrency}
                    isDisabled={true}
                />
                <button
                    onClick={convert}
                    className="flex-1 bg-blue-600 mx-4 mb-4 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-700 duration-100"
                >
                    Convert {fromCurrency.toUpperCase()} to{" "}
                    {toCurrency.toUpperCase()}
                </button>
            </div>
        </div>
    );
}

export default App;
