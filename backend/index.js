const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());

// Mount all routes at root
app.use("/", apiRoutes);

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running at http://0.0.0.0:5000");
});
