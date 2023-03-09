import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import AddEmployee from "./pages/addemployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/addemployee" element={<AddEmployee></AddEmployee>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
