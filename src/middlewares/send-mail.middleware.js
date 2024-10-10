const { checkIsReqBodyValid } = require("../utils/checkIsReqBodyValid");

function validateReqParamsForSendEmail(req, res, next) {
  const listOfExpectedParams = [
    { key: "email", type: "string" },
    { key: "name", type: "string" },
    { key: "subject", type: "string" },
    { key: "message", type: "string" },
  ];

  checkIsReqBodyValid(req.body, listOfExpectedParams);

  next();
}

module.exports = { validateReqParamsForSendEmail };
