// useBitcoinPrice.js
import { useState, useEffect } from "react";

function useBitcoinPrice(currency) {
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

  return { price, error };
}

export default useBitcoinPrice;
