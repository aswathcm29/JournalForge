const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const journalRoutes = require("./routes/journalRoutes");
const multer = require("multer");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const crypto = require("crypto");
const User = require("./models/userSchema");
const { validatePassword } = require("./controllers/authController");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        const isValid = await validatePassword(password, user.hash, user.salt);
        if (!isValid) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.use(cookieParser());
const saltRounds = 10;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

try {
  const connect = async () => {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("db connected");
  };
  connect();
} catch (err) {
  console.log(err.message);
}

app.get("/", (req, res) => {
  res.status(200).json("hello world");
});

app.use("/uploads", express.static("uploads"));

app.use("/users", userRoutes);
app.use("/journal", journalRoutes);
