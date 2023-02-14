const request = require("supertest");
const { app } = require("../index");

describe("Login", () => {
  it("should success if credential is valid", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "eriktesterigjen", password: "123456789" })
      .expect(200)
      .expect("Content-Type", /json/)
      .end(done);
  });

  it("should fail if credential is invalid", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "eriktesterigjen", password: "wrongPassword" })
      .expect(400)
      .end(done);
  });
});
