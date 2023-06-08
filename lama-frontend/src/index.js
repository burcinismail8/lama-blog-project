import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/write" element={<Write />} />
            <Route path="/post/:id" element={<Single />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </>
);
