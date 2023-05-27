import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from "../Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Routes path="/movies" element={<Movies />} />
        <Routes path="/saved-movies" element={<SavedMovies />} />
        <Routes path="/Profile" element={<Profile />} />
        <Routes path="/signup" element={<Signup />} />
  <Routes path="/signin" element={<Signin />} />*/}
      </Routes>
    </div>
  );
}

export default App;
