import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layouts/footer";
import HeaderComp from "./assets/layouts/header";
import AddProductsPage from "./assets/pages/addPages";
import DetailPage from "./assets/pages/detailPage";
import HomePage from "./assets/pages/homePage";
import WishListPage from "./assets/pages/wishListPage";

function App() {
  return (
    <div className="App">
      <HeaderComp />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detailPage/:id" element={<DetailPage />}></Route>
        <Route path="/addProductPage" element={<AddProductsPage />}></Route>
        <Route path="/wishListPage" element={<WishListPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
