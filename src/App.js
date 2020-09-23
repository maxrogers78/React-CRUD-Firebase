import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Links from "./components/Links";

function App() {
  return (
    <div className="container p-4">
      <Links />
      <ToastContainer />
    </div>
  );
}

export default App;
