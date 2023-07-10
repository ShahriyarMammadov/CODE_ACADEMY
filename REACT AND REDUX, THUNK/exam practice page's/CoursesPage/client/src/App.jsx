import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./assets/layouts/header";
import Footer from "./assets/layouts/footer";
import HomePage from "./assets/pages/homePage";
import NotFound from "./assets/pages/notFound";
import DetailPage from "./assets/pages/detailPage";
import LoginPage from "./assets/pages/loginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
