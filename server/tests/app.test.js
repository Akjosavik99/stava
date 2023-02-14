/* const { expect } = require("chai"); */
const User = require("../Models/user");
const userModel = require("../Models/user");
const mongoose = require("mongoose");

const { dbConnect, dbDisconnect } = require("../utils/dbHandler.utils");
const { MongoServerError } = require("mongodb");

beforeAll(async () => {
  await dbConnect();
});
afterAll(async () => {
  await dbDisconnect();
});

describe("create user", () => {
  it("should create a new user", async () => {
    const newUser = await User({
      username: "test",
      password: "12345678",
    });
    expect(() => userModel.create(newUser)).not.toThrow();
  });

  it("should not create a new user", async () => {
    const noPassword = new User({ username: "test" });
    const shortPassword = new User({ username: "test", password: "short" });
    const nullUsername = new User({ username: null, password: "12345678" });

    let err;
    try {
      await userModel.create(noPassword);
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);

    err;
    try {
      await userModel.create(shortPassword);
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);

    err;
    try {
      await userModel.create(nullUsername);
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  it("should get duplication error", async () => {
    const duplicateUser = await User({
      username: "test",
      password: "12345678",
    });
    let err;
    try {
      await userModel.create(duplicateUser);
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(MongoServerError);
  });
});
