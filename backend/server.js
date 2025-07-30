const express = require("express");

require("dotenv").config();
const cors = require("cors");

const pinRoutes = require("./routes/pinned");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use("/", pinRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
