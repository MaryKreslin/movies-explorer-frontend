import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext, user } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupEdit from "../PopupEdit/PopupEdit";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [headerType, setheadertype] = React.useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moreMovies, setMoreMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [currentUser, setcurrentUser] = React.useState({});
  const [currentEmail, setcurrentEmail] = React.useState("");
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = React.useState(false);
  const [infoTooltipType, setinfoTooltipType] = React.useState("");
  const [infoTooltipText, setinfoTooltipText] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([])

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);
    handleResize()
  },
    [windowWidth]
  )

  useEffect(() => {
    handleTokenCheck();
  }, [])

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setloggedIn(true);
            setheadertype("movies");
            setcurrentUser(res.data);
            navigate("/movies", { replace: true });
            getAllMovies();
          }
        })
        .catch((err) => console.log(err))
    } else {
      setheadertype("login")
      navigate("/signin", { replace: true })
    }
  }

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

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

  const handleRegister = (person) => {
    mainApi.register(person)
      .then((res) => {
        if (res.ok) {
          handleLogin(res.data.email, res.data.password)
          setinfoTooltipType("reg-success")
          setinfoTooltipText("Вы успешно зарегистрировались!")
        }
      })
      .catch((err) => {
        console.log(err)
        setinfoTooltipType("reg-failed")
        setinfoTooltipText("Что-то пошло не так! Попробуйте ещё раз.")
      })
      .finally(() => {
        setisInfoTooltipOpen(true)
      })
  }

  const getAllMovies = () => {
    setIsLoading(true);
    moviesApi.findMovie()
      .then((data) => {
        setMovies(data);
        //localStorage.setItem('allMovies', JSON.stringify(data))
        handleResize()
      })
      .then(() => {
        getSavedMovies()
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setIsLoading(false) })
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    mainApi.authorize(password, email)
      .then((data) => {
        if (data.token) {
          setloggedIn(true);
          setheadertype("movies");
          setcurrentUser({ email: email })
          navigate('/movies', { replace: true });
          getAllMovies();
        }
      })
      .catch(err => {
        setinfoTooltipType("auth-failed")
        setinfoTooltipText(err)
        setisInfoTooltipOpen(true)
      });

  }
  const closeInfoTooltip = (type) => {
    if (type === "reg-success" || type === "auth-failed") {
      navigate('/signin', { replace: true });
    } else {
      navigate('/signup', { replace: true });
    }
    closePopup();
  }

  const closePopup = () => {
    setisEditProfilePopupOpen(false);
    setisInfoTooltipOpen(false)
  }

  const handleFindMoviesClick = (findText, isShort) => {
    setIsLoading(true);
    moviesApi.findMovie()
      .then((data) => {
        const searchedMovies = data.filter((item) => item.nameRU.toLowerCase().includes(findText.toLowerCase()))
        const shortMovies = isShort ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;

        localStorage.setItem('findText', findText)
        setMovies(shortMovies);
        localStorage.setItem('foundMovies', JSON.stringify(shortMovies))
        localStorage.setItem('isShortMovie', isShort)
        handleResize()
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setIsLoading(false) })
  }

  const handleResize = () => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies === null) {
      return
    }

    if (windowWidth > 768 && windowWidth <= 1280) {
      setMovies(foundMovies.slice(0, 12))
      setMoreMovies(3)
    } else if (windowWidth > 480 && windowWidth <= 768) {
      setMovies(foundMovies.slice(0, 8))
      setMoreMovies(2)
    } else if (windowWidth >= 320 && windowWidth <= 480) {
      setMovies(foundMovies.slice(0, 5))
      setMoreMovies(2)
    }
  }

  const handleShowMore = () => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    setMovies(foundMovies.slice(0, movies.length + moreMovies))
  }

  const handleSaveMovieClick = (movie) => {
    mainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data.data])
      })
      .catch((err) => { console.log(err) })
  }

  const getSavedMovies = () => {
    setIsLoading(true)
    mainApi.getMovies()
      .then((data) => {
        setSavedMovies(data.data)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setIsLoading(false) })
  }

  const handleDeleteMovieClick = (movie) => {
    const deleteMovie = savedMovies.find(item => item.movieId === movie.id)

    mainApi.deleteMovie(deleteMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item.movieId !== movie.id))
      })
      .catch((err) => { console.log(err) })
  }

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    mainApi.patchUserInfo(name, email)
      .then((data) => {
        setcurrentUser(data.data)
        closePopup()
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setIsLoading(false) })
  }

  function checkIsSaved(movie) {
    return savedMovies.some(item => item.movieId === movie.id)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main
            loggedIn={loggedIn}
            handleHeaderClick={headerButtonClick}
            isLoading={isLoading}
            headerType={"main"} />}
          />
          <Route path="/movies" element={
            <ProtectedRouteElement element={Movies}
              loggedIn={loggedIn}
              movies={movies}
              isSaved={checkIsSaved}
              savedMovies={savedMovies}
              onShowMore={handleShowMore}
              isLoading={isLoading}
              headerType={"movies"}
              onFindMoviesClick={handleFindMoviesClick}
              handleHeaderClick={headerButtonClick}
              handleSaveMovieClick={handleSaveMovieClick}
              handleDeleteMovieClick={handleDeleteMovieClick}
              listType='movies' />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement element={SavedMovies}
              loggedIn={loggedIn}
              movies={savedMovies}
              isSaved={checkIsSaved}
              headerType={"savedMovies"}
              handleHeaderClick={headerButtonClick}
              headerTypechange={setheadertype}
              isLoading={isLoading}
              handleDeleteMovieClick={handleDeleteMovieClick}
              listType='savedMovies' />}
          />
          <Route path="/profile" element={
            <ProtectedRouteElement element={Profile}
              email={currentEmail}
              loggedIn={loggedIn}
              headerType={"profile"}
              handleHeaderClick={headerButtonClick}
              isLoading={isLoading}
              userName='Виталий'
              userEmail='pochta@yandex.ru'
              handleEditClick={handleEditProfileOpen} />}
          />
          <Route path="/signup" element={
            <Register
              headerType={"none"}
              isLoading={isLoading}
              onSubmit={handleRegister}
              handleClickLogo={headerButtonClick}
              headerTypechange={setheadertype}
            />
          } />
          <Route path="/signin" element={
            <Login
              headerType={"none"}
              handleLogin={handleLogin}
              handleClickLogo={headerButtonClick}
              headerTypechange={setheadertype} />} />
          <Route path="*" element={
            <NotFoundPage
              headerType={"none"}
              headerTypechange={setheadertype}
              handleClick={headerButtonClick} />} />
        </Routes>
        <PopupEdit isOpen={isEditProfilePopupOpen}
          onClose={closePopup}
          isLoading={isLoading}
          onUpdateUser={handleUpdateUser} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          type={infoTooltipType}
          onClose={closeInfoTooltip}
          text={infoTooltipText}
        />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
