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
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  brandName: { type: String, required: true },
});

const products = mongoose.model("products_docs", productsSchema);

app.get("/products", (req, res) => {
  products.find({}, (err, docs) => {
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
  console.log('bura baxxxx',req);
  let product = new products({
    image: req?.body?.image,
    category: req?.body?.category,
    brandName: req?.body?.brandName,
    price: req?.body?.price,
  });

  product.save();
  res.send({ message: "SUCCESS" });
});

mongoose.connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/?retryWrites=true&w=majority",
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
