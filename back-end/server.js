// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();;
});

const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`🎧 Listening on port ${PORT} 🎧 `);
});
