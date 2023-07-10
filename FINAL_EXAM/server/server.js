const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const examSchema = new mongoose.Schema({
  image: { type: String },
  headerText: { type: String },
  aboutText: { type: String },
  price: { type: Number },
});

const exam = mongoose.model("exam", examSchema);

app.get("/product", (req, res) => {
  exam.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500);
    }
  });
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  exam.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404);
      }
    } else {
      res.status(500);
    }
  });
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  exam.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(201).json({ message: "SUCCESS" });
    } else {
      res.status(404);
    }
  });
});

app.post("/product", (req, res) => {
  const data = new exam(req.body);
  data.save();
  res.status(200).json({ message: "SUCCESS" });
});

const port = 3000;

mongoose.connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      app.listen(port, () => {
        console.log("CONNECTED SUCCESS");
      });
    } else {
      console.log(err);
    }
  }
);
