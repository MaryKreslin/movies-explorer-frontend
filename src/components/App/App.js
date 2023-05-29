import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main headerType='main'/>} />
        <Route path="/movies" element={<Movies headerType='movies'/>} />
        <Route path="/saved-movies" element={<SavedMovies headerType='savedMovies'/>} />
        <Route path="/Profile" element={<Profile headerType='movies' userName='Виталий' userEmail='pochta@yandex.ru'/>} />
        {/*<Route path="/signup" element={<Signup />} />
  <Route path="/signin" element={<Signin />} />*/}
      </Routes>
    </div>
  );
}

export default App;
