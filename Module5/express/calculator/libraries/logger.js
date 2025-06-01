class Logger {
  log(id, operation, result) {
    console.log(
      `[Calculator ID: ${id}] Operation: ${operation}, Result: ${result}`
    );
  }
}

module.exports = Logger;
