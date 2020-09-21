import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Links from "./components/Links";
import LinkForm from "./components/LinkForm";

function App() {
  return (
    <div className="container p-4">
      <Links />
      <ToastContainer />
    </div>
  );
}

export default App;
