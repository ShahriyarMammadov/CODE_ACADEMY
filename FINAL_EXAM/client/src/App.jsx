import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import AddedPage from "./assets/pages/addedPage";
import DetailPage from "./assets/pages/detailPage";
import ErrorPage from "./assets/pages/errorPage";
import HomePage from "./assets/pages/homePage";
import WishPage from "./assets/pages/wishPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/wishList" element={<WishPage />}></Route>
        <Route path="/detailPage/:id" element={<DetailPage />}></Route>
        <Route path="/addPage" element={<AddedPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
