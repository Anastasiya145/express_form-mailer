const emailService = require("../services/email.service");

async function sendEmail(req, res) {
  const data = req.body;

  const { error } = await emailService.sendMail(data);

  if (error) {
    return res
      .status(400)
      .send({ error: error.message || "Error sending email." });
  }

  return res.send({ message: "Email sent successfully!" });
}

module.exports = { sendEmail };
