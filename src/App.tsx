import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import NavBar from "./layout/nav-bar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
