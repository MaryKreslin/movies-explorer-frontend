import React, { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

function App() {
  const [headerType, setheadertype] = React.useState("main");
  const navigate = useNavigate();

  const headerButtonClick = (type) => {
    switch (type) {
      case "main":
        navigate("/register")
        setheadertype("register")
        break;
      case "movies":
        navigate("/profile")
        setheadertype("profile")
        break;
      case "savedMovies":
        navigate("/profile")
        setheadertype("profile")
        break;
      default:
        navigate("");
        setheadertype("")
    }
  }
  return (
    <div className="App">
      <Header type={headerType} handleClick={headerButtonClick} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile userName='Виталий' userEmail='pochta@yandex.ru' />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/signin" element={<Signin />} />*/}
      </Routes>
    </div>
  );
}

export default App;
