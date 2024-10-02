const { main } = require("../utils/Lang");
const nodemailer = require("nodemailer");

const categoriesFeedback = async (req, res) => {
  var prompt =
    "Generate me just a journal body content up to 500 to 600 words so that i can just paste it my blog as it is without any unwanted prompt contents";

  try {
    const data = req.body.data;
    if (!data) {
      return res
        .status(400)
        .json({ status: "failed", message: "Data is required" });
    }

    const chatCompletion = await main(data, prompt);
    console.log(chatCompletion);

    if (!chatCompletion) {
      console.log("no data");
      return res
        .status(400)
        .json({ status: "failed", message: "No data found" });
    }

    return res.status(200).json({ message: chatCompletion });
  } catch (err) {
    console.error("Error fetching chat completion:", err);
    return res.status(500).json({ status: "failed", message: err.message });
  }
};

//adding contact form controller

async function ContactAdmin(req, res) {
  const { Name, Email, Phone, Message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taskmaster991@gmail.com",
      pass: "fcvipeqntxbhakrh",
    },
  });

  const mailOptions = {
    from: "taskmaster991@gmail.com",
    to: "aswathcm29@gmail.com",
    subject: "New From JournalForge",
    text: `
        Name: ${Name}
        Email: ${Email}
        Phone: ${Phone}
        Message: ${Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Form data sent successfully");
    }
  });
}

module.exports = { categoriesFeedback, ContactAdmin };
