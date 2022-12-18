import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./context";
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={500} theme="colored" draggable />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
