import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main headerType='main'/>} />
        <Route path="/movies" element={<Movies headerType='movies'/>} />
        {/*<Route path="/saved-movies" element={<SavedMovies />} />
        <Routes path="/Profile" element={<Profile />} />
        <Routes path="/signup" element={<Signup />} />
  <Routes path="/signin" element={<Signin />} />*/}
      </Routes>
    </div>
  );
}

export default App;
