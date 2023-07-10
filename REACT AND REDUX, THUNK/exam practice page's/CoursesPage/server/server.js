const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.set("strictQuery", false);

app.use(cors());
app.use(bodyParser.json());

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cardHeader: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
});
const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  image: { type: String, required: true },
});

const products = mongoose.model("products_docs", productsSchema);
const users = mongoose.model("users", usersSchema);

app.get("/products", (req, res) => {
  products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/users", (req, res) => {
  users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  products.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
        res.status(200);
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  users.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
        res.status(200);
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  products.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(404).json({ message: "notFound" });
    }
  });
});

app.post("/products", (req, res) => {
  let product = new products({
    title: req?.body?.title,
    cardHeader: req?.body?.cardHeader,
    text: req?.body?.text,
    price: req?.body?.price,
    image: req?.body?.image,
    rating: req?.body?.rating,
  });

  product.save();
  res.send({ message: "SUCCESS" });
});

app.post("/users", (req, res) => {
  let user = new users({
    name: req?.body?.name,
    info: req?.body?.info,
    image: req?.body?.image,
  });

  user.save();
  res.send({ message: "SUCCESS" });
});

mongoose.connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/Products",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
