import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat,Home,Front } from "./components/index"
export default function App() {

  return (
    <>
      <Router >

        <Routes>
        <Route path="/" element={<Front />} />
        {/* <Route path="/chat/india" element={<Chat />} /> */}
        <Route path="/chat/:routeParam" element={<Chat/>}/>
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
