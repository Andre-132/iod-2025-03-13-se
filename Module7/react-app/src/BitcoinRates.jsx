import { useState } from "react";
import useBitcoinPrice from "../Extract";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, error } = useBitcoinPrice(currency);

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
