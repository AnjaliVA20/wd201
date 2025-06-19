const app = require("./app");
const db = require("./models");

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
  .then(() => {
    console.log("Connected to the database");
    return db.sequelize.sync(); // Makes sure tables exist
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });