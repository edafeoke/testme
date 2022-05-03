import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "./";
import { Footer, NavBar } from "../components";

const Home = () => {
  return (
    <div>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default Home