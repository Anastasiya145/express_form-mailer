const { Resend } = require("resend");
require("dotenv/config");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail({ email, name, subject, message }) {
  const html = `
  <h1>Hello, I want to contact you!</h1>
  <p>From ${email}, my name is <strong>${name}<strong></p>
  <p>${message}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_EMAIL_FROM,
    to: process.env.MY_EMAIL,
    subject,
    html,
  });

  return { data, error };
}

module.exports = { sendMail };
