const app = require("./src/index");
require("dotenv/config");

const { PORT, SERVER_URL } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on the ${SERVER_URL}`);
});
