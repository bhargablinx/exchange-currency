import { useEffect, useState } from "react";

const useCurrency = (currency) => {
    const [data, setData] = useState({});
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);
    // console.log(data);

    return data;
};

export default useCurrency;
