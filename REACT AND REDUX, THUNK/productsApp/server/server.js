const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();
mongoose.set("strictQuery", false);
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: String, required: true },
  ssd: { type: String, required: true },
  cpu: { type: String, required: true },
});

const Products = mongoose.model("products_docs", userSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

const port = 8000;

mongoose.connect(
  "mongodb+srv://ShahriyarMammadov:sehriyar123@cluster0.xjblasa.mongodb.net/Products",
  { useNewUrlParser: true }
);
app.listen(8000, () => {
  console.log("server is running!!");
});

// let prod = [
//   {
//     id: 1,
//     name: "Asus ZenBook",
//     cpu: "R3-5300U",
//     ssd: "256 GB",
//     PRICE: "1099  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/09/ASUS-ZenBook-14-UM3402-1.png",
//   },
//   {
//     id: 4,
//     name: "HP",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "1000  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 5,
//     name: "HP envy 4400",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "4500  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 6,
//     name: "Asus zenBook",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "580  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 7,
//     name: "Asus ZenBook",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "1000  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 8,
//     name: "Hp Envyx360",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "1500  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 9,
//     name: "Asus VivoBook",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "1000  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 10,
//     name: "Asus ZenBook",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "999 ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 11,
//     name: "Asus vivoBook",
//     cpu: "R3-5300U",
//     ssd: "128 GB",
//     PRICE: "1098  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-VivoBook-16X-X1603-5.png",
//   },
//   {
//     id: 20,
//     name: "Asus ZenBook",
//     cpu: "R3-5300U",
//     ssd: "256 GB",
//     PRICE: "1099  ",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/09/ASUS-ZenBook-14-UM3402-1.png",
//   },
//   {
//     name: "asus Shahriyar",
//     PRICE: "pul catmaz",
//     images:
//       "https://aztech.az/wp-content/uploads/2022/11/ASUS-ZenBook-S13-OLED-UM5302TA-1.png",
//     id: 21,
//   },
// ];

// let idCounter = 105;

// app.get("/prod", (req, res) => {
//   res.send(prod);
// });

// app.get("/prod/:id", (req, res) => {
//   const id = req.params.id;

//   const selectProducts = prod.find((product) => product.id == id);

//   if (selectProducts) {
//     res.send(selectProducts);
//     res.status(200);
//   } else {
//     console.log("there is no such user");
//     res.status(404).json({ message: "there is no such user.." });
//   }
// });

// app.delete("/prod/:id", (req, res) => {
//   const id = +req.params.id;

//   prod = prod.filter((q) => q.id !== id);
//   res.status(200).json({ message: "succesfully deleted" });
// });

// app.post("/prod", (req, res) => {
//   console.log(req.body);
//   const prodObj = {
//     id: idCounter++,
//     prodname: req.body?.name,
//     PRICE: req.body?.price,
//     images: req.body?.images,
//   };
//   prod.push(prodObj);
// });

// app.put("/prod/:id", (req, res) => {
//   const { id } = +req.params;
//   prod = prod.filter((elem) => elem.id !== id);

//   const updatedUser = {
//     id: id,
//     name: req.body.name,
//     username: req.body.username,
//   };
//   prod.push(updatedUser);
// });

// app.listen(port, () => {
//   console.log(`this app is listining on port ${port}`);
// });
