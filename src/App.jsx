import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Client/pages/Homepage";
import NotFound from "./components/Client/pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
