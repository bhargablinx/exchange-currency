const useCurrency = async (currency) => {
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    let response = await fetch(URL);
    response = await response.json();
    response = response[currency];
    return response;
};

export default useCurrency;
