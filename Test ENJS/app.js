const express = require('express');
const songRouter = require("./routes/SongRoutes");

const app = express();
app.use("/api/songs", songRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

const mongoose = require('mongoose');

mongoose.connect(

    process.env.MONGODB_URI || "mongodb://localhost:27017/Yenct",
    {
        useNewUrlParser: true,
    useUnifiedTopology: true,
    },).then((res) => {
        console.log("Connected to MongoDB");
      }).catch(error => {
         console.log(error);
       });

module.exports = app;