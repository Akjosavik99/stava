const request = require("supertest");
const { app } = require("../index");

let userId;

const setUser = (res) => {
  const user = res.body.data;
  if (user) {
    userId = user._id;
    return true;
  }
  return false;
};

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

  it("should fail if password is wrong", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "eriktesterigjen", password: "wrongPassword" })
      .expect(400)
      .end(done);
  });

  it("should fail if username is wrong", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "wrongUsername", password: "123456789" })
      .expect(400)
      .end(done);
  });

  it("should fail if password is not given", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "eriktesterigjen" })
      .expect(400)
      .end(done);
  });

  it("should fail if username is not given", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ password: "123456789" })
      .expect(400)
      .end(done);
  });

  it("should fail if username and password is not given", (done) => {
    request(app)
      .post("/api/user/auth")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({})
      .expect(400)
      .end(done);
  });
});

describe("Register", () => {
  it("should success if credential is valid", (done) => {
    request(app)
      .post("/api/user/register")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({
        username: "testRegisterWorks",
        password: "123456789",
        confirmPassword: "123456789",
      })
      .expect(200)
      .expect(setUser)
      .end(done);
  });

  it("should fail if password and confirmPassword does not match", (done) => {
    request(app)
      .post("/api/user/register")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({
        username: "wrongConfirmPassword",
        password: "123456789",
        confirmPassword: "987654321",
      })
      .expect(400)
      .end(done);
  });

  it("should fail if not all fields are given", (done) => {
    request(app)
      .post("/api/user/register")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "missingConfirmPassword", password: "123456789" })
      .expect(400)
      .end(done);
  });

  it("should fail if credential is invalid", (done) => {
    request(app)
      .post("/api/user/register")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ username: "eriktesterigjen", password: "123456789" })
      .expect(400)
      .end(done);
  });
});

describe("Delete user", () => {
  it("should succeed if id is valid and user exists", (done) => {
    request(app)
      .delete(`/api/user/register/?id=${userId}`)
      .set("Accept", "application/json")
      .set("Content-Type", "x-www-form-urlencoded")
      .expect(200)
      .end(done);
  });

  it("should fail if user does not exist", (done) => {
    request(app)
      .delete(`/api/user/register/?id=${userId}`)
      .set("Accept", "application/json")
      .set("Content-Type", "x-www-form-urlencoded")
      .expect(400)
      .end(done);
  });

  it("should fail if id is wrong", (done) => {
    request(app)
      .delete(`/api/user/register/?id=wrongId`)
      .set("Accept", "application/json")
      .set("Content-Type", "x-www-form-urlencoded")
      .expect(500)
      .end(done);
  });
});
