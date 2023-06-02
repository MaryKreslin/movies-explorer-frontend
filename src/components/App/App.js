import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupEdit from "../PopupEdit/PopupEdit";
import Responsive from "../Responsive/Responsive";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [headerType, setheadertype] = React.useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleEditProfileOpen = () => {
    setisEditProfilePopupOpen(true)
  }

  const headerButtonClick = (type) => {
    setIsLoading(true)
    switch (type) {
      case "main":
        navigate("/")
        setheadertype("main")
        break;
      case "register":
        navigate("/signup")
        setheadertype("none")
        break;
      case "login":
        navigate("signin")
        setheadertype("none")
        break;
      case "profile":
        navigate("/profile")
        setheadertype("profile")
        break;
      case "movies":
        navigate("/movies")
        setheadertype("movies")
        break;
      case "savedMovies":
        navigate("/saved-movies")
        setheadertype("savedMovies")
        break;
      default:
        setheadertype("")
    }
    setIsLoading(false)
  }

  const handleResister = (password, email) => {
    setheadertype("none");
    navigate('/signin', { replace: true });
  }

  const handleLogin = (email, password) => {
    setheadertype("movies");
    navigate('/movies', { replace: true });
  }

  const closePopup = () => {
    setisEditProfilePopupOpen(false)
  }

  return (
    <div className="App">
      <Responsive element={Header} type={headerType} handleClick={headerButtonClick} />
      <Routes>
        <Route path="/" element={<Main headerTypechange={setheadertype} isLoading={isLoading} />} />
        <Route path="/movies" element={<Movies headerTypechange={setheadertype} isLoading={isLoading} />} />
        <Route path="/saved-movies" element={<SavedMovies headerTypechange={setheadertype} isLoading={isLoading} />} />
        <Route path="/profile" element={
          <Profile
            headerTypechange={setheadertype}
            isLoading={isLoading}
            userName='Виталий'
            userEmail='pochta@yandex.ru'
            handleEditClick={handleEditProfileOpen} />}
        />
        <Route path="/signup" element={
          <Register isLoading={isLoading}
            handleResister={handleResister}
            handleClickLogo={headerButtonClick}
            headerTypechange={setheadertype} />
        } />
        <Route path="/signin" element={
          <Login handleLogin={handleLogin}
            handleClickLogo={headerButtonClick}
            headerTypechange={setheadertype} />} />
        <Route path="*" element={
          <NotFoundPage
            headerTypechange={setheadertype}
            handleClick={headerButtonClick} />} />
      </Routes>
      <PopupEdit isOpen={isEditProfilePopupOpen}
        onClose={closePopup}
        isLoading={isLoading} />
    </div >
  );
}

export default App;
