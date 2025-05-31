const request = require("supertest");
const app = require("./app");

describe("Calculator API", () => {
  test("GET /calc/add returns correct sum", async () => {
    const res = await request(app).get("/calc/add?x=10&y=5");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Result 15");
  });

  test("GET /calc/subtract returns correct difference", async () => {
    const res = await request(app).get("/calc/subtract?x=10&y=5");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Result 5");
  });

  test("GET /calc/multiply returns correct product", async () => {
    const res = await request(app).get("/calc/multiply?x=10&y=5");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Result 50");
  });

  test("GET /calc/divide returns correct quotient", async () => {
    const res = await request(app).get("/calc/divide?x=10&y=5");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Result 2");
  });

  test("GET /calc/divide returns 400 on division by zero", async () => {
    const res = await request(app).get("/calc/divide?x=10&y=0");
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Cannot divide by zero.");
  });

  test("GET /calc/add returns 400 on invalid input", async () => {
    const res = await request(app).get("/calc/add?x=foo&y=bar");
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Invalid input. Please provide valid integers.");
  });
});
