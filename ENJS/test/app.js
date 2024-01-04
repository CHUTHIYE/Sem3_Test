const express = require("express");
const customerRouter = require("../routes/SongRoute");
const app = express();

//middleware
app.use(express.json());
app.use("/api/songs", customerRouter);

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Yenct", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = app;
