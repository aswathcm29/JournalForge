const crypto = require("crypto");
const User = require("../models/userSchema");
const z = require("zod");
const userSchema = require("../zod/userSchema.zod");
const passport = require("passport");

function hashPassword(password) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

async function validatePassword(password, hash, salt) {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
}

async function signup(req, res) {
  try {
    const validatedInput = userSchema.safeParse(req.body);

    if (!validatedInput.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: validatedInput.error.errors,
      });
    }

    const existingUser = await User.findOne({
      email: validatedInput.data.email,
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const { salt, hash } = hashPassword(validatedInput.data.password);

    const newUser = new User({
      username: validatedInput.data.username,
      email: validatedInput.data.email,
      salt,
      hash,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    }
    return res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}

async function login(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error during authentication", error: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error logging in", error: err.message });
      }
      return res.status(200).json({ message: "Logged in successfully" });
    });
  })(req, res, next);
}

module.exports = { signup, login, validatePassword };
