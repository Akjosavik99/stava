const { MongoClient } = require("mongodb");
const request = require("supertest");
const { MongoURI } = require("../config/database");
const User = require("../Models/user");
//const MongoDBStore = require("connect-mongodb-session"); */

/* const userRouter = require("../Routers/userRouter");

const express = require("express"); */

/* jest.mock("mongoose"); */
/* jest.spyOn(MongoDBStore, "MongoDBStore"); */

/* jest.mock("express-session", () => (req, res, next) => null);
jest.mock("connect-mongodb-session", () => (req, res, next) => null); */
/* sessionSpy.mockReturnValue(() => (req, res, next) => null); */

// const app = require("../index");

const { dbConnect, dbDisconnect } = require("../utils/dbHandler.utils");

beforeAll(async () => {
  await dbConnect();
});
afterAll(async () => {
  await dbDisconnect();
});

describe("create user", () => {
  /* let connection;
  let db;
  let app;

  beforeAll(async () => {
    connection = await MongoClient.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();

    app = express();
    app.use("/api/user", userRouter);
  });
  afterAll(async () => {
    await connection.close();
    await db.close();
  }); */

  it("should create a new user", async () => {
    const newUser = await User({
      username: "test",
      password: "test",
    });

    await newUser.save();
    expect(newUser.username).toBe("test");

    /* await request(app).get("/api/auth/register"); */
    /* expect(createUser.mock.calls.length).toBe(1); */
  });

  it("should not create a new user", async () => {
    const wrongUser = await User({ username: "test" });

    expect(wrongUser.save).toThrow();
  });

  it("should get duplication error", async () => {
    const duplicateUser = await User({
      username: "test",
      password: "test",
    });

    expect(duplicateUser.save).toThrow();
  });
});
/* describe("login user", () => {
  it("should login a user", async () => {
    const newUser = await User({
      username: "test",
      password: "test",
    });

    await newUser.save();
  });
}); */
