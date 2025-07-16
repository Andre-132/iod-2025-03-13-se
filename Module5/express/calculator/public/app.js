let currentHistory = [];

document.addEventListener("DOMContentLoaded", function () {
  loadHistory();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById("operation").addEventListener("change", function () {
    const num2Input = document.getElementById("num2");
    if (this.value === "sqrt") {
      num2Input.style.display = "none";
      num2Input.removeAttribute("required");
    } else {
      num2Input.style.display = "block";
      num2Input.setAttribute("required", "required");
    }
  });

  document.getElementById("num1").addEventListener("keypress", handleEnterKey);
  document.getElementById("num2").addEventListener("keypress", handleEnterKey);
  document
    .getElementById("operation")
    .addEventListener("keypress", handleEnterKey);
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    calculate();
  }
}

async function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;

  hideResult();
  hideError();

  if (!num1 || !operation) {
    showError("Please fill in all required fields");
    return;
  }

  if (operation !== "sqrt" && !num2) {
    showError("Please enter the second number");
    return;
  }

  try {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2,
        operation: operation,
      }),
    });

    const data = await response.json();

    if (data.success) {
      showResult(data.result);
      currentHistory = data.history;
      displayHistory();
    } else {
      showError(data.error);
    }
  } catch (error) {
    showError("Network error: " + error.message);
  }
}

async function loadHistory() {
  try {
    const response = await fetch("/api/history");
    const data = await response.json();

    if (data.success) {
      currentHistory = data.history;
      displayHistory();
    }
  } catch (error) {
    console.error("Error loading history:", error);
  }
}

async function clearHistory() {
  try {
    const response = await fetch("/api/history", {
      method: "DELETE",
    });

    const data = await response.json();

    if (data.success) {
      currentHistory = [];
      displayHistory();
    }
  } catch (error) {
    showError("Error clearing history: " + error.message);
  }
}

function displayHistory() {
  const historyList = document.getElementById("history-list");
  const clearButton = document.getElementById("clear-history");

  if (currentHistory.length === 0) {
    historyList.innerHTML = "<p>No calculations yet.</p>";
    clearButton.style.display = "none";
    return;
  }

  const recentHistory = currentHistory.slice(-10).reverse();

  historyList.innerHTML = recentHistory
    .map((calc) => {
      const timestamp = new Date(calc.timestamp).toLocaleString();
      let calculation;

      if (calc.operation === "√") {
        calculation = `√${calc.operand1} = ${calc.result}`;
      } else {
        calculation = `${calc.operand1} ${calc.operation} ${calc.operand2} = ${calc.result}`;
      }

      return `
            <div class="history-item">
                <span class="calculation">${calculation}</span>
                <span class="timestamp">${timestamp}</span>
            </div>
        `;
    })
    .join("");

  clearButton.style.display = "block";
}

function showResult(result) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Result: ${result}`;
  resultDiv.style.display = "block";
}

function showError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = `Error: ${message}`;
  errorDiv.style.display = "block";
}

function hideResult() {
  document.getElementById("result").style.display = "none";
}

function hideError() {
  document.getElementById("error").style.display = "none";
}
