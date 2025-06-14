import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPrice(data.bitcoin[currency.toLowerCase()]);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
          setError("Failed to fetch price");
        }
      }
    };

    fetchPrice();

    return () => controller.abort();
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div style={{ marginTop: "10px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {price !== null ? (
          <p>
            1 BTC = {price} {currency}
          </p>
        ) : (
          <p>Loading price...</p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
