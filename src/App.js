import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer  autoClose={2000}/>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
