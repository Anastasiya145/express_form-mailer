const express = require("express");
const sendMailMiddleware = require("../middlewares/send-mail.middleware");
const sendMailController = require("../controllers/send-mail.controller");
const catchError = require("../utils/errorHandler");

const sendMailRouter = new express.Router();

sendMailRouter.post(
  "/",
  sendMailMiddleware.validateReqParamsForSendEmail,
  catchError(sendMailController.sendEmail)
);

module.exports = sendMailRouter;
