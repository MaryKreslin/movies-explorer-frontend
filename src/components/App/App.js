import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupEdit from "../PopupEdit/PopupEdit";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import {
  BAD_LOGIN_PASSWORD_MESSAGE,
  UNAUTHRIZED_TOKEN_ERROR_MESSAGE,
  USER_EMAIL_CONFLICT_MESSAGE,
  REGISTER_ERROR_MESSAGE,
  PROFILE_UPDATE_MESSAGE,
  UNAUTHRIZED_BAD_TOKEN_MESSAGE,
  SERVER_ERROR_MESSAGE
} from "../../utils/constants";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [headerType, setheadertype] = React.useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moreMovies, setMoreMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [currentUser, setcurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isFound, setIsFound] = React.useState(false);

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);
    handleResize()
  },
    [windowWidth]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUserInfo();
      getSavedMovies();
      if (JSON.parse(localStorage.getItem('foundMovies'))) {
        setMovies(JSON.parse(localStorage.getItem('foundMovies')))
      }
    }
  }, [loggedIn])

  const handleLogout = () => {
    setloggedIn(false)
    localStorage.clear()
    navigate("/")
    setcurrentUser({})
    setMovies([])
    setErrorMessage('')
    setSavedMovies([])
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
        navigate("/signin")
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

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    mainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch((err) => {
        console.log(err)
        if (err.includes(409)) {
          setErrorMessage(USER_EMAIL_CONFLICT_MESSAGE)
        } else {
          setErrorMessage(REGISTER_ERROR_MESSAGE)
        }
      })
      .finally(() => { setIsLoading(false) })
  }

  const handleLogin = (email, password) => {
    setIsLoading(true);
    mainApi.login(email, password)
      .then((data) => {
        if (data) { }
        setloggedIn(true);
        setheadertype("movies");
        setTimeout(() => navigate("/movies", { replace: true }), 1000)
      })
      .catch(err => {
        if (err.includes(401)) {
          setErrorMessage(BAD_LOGIN_PASSWORD_MESSAGE)
        } else {
          setErrorMessage(UNAUTHRIZED_BAD_TOKEN_MESSAGE)
        }
      })
      .finally(() => { setIsLoading(false) })
  }

  //получение данных пользователя
  const getUserInfo = () => {
    mainApi.getUserInfo()
      .then((data) => {
        setcurrentUser(data.data)
      })
      .catch((err) => {
        setErrorMessage(SERVER_ERROR_MESSAGE)
      })
  }

  //Получение списка сохраненных фильмов
  const getSavedMovies = () => {
    setIsLoading(true)
    mainApi.getMovies()
      .then((data) => {
        setSavedMovies(data.data)
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage(SERVER_ERROR_MESSAGE)
      })
      .finally(() => { setIsLoading(false) })
  }

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then(() => {
          setloggedIn(true);
          setheadertype("movies");
          navigate("/movies", { replace: true });
        })
        .catch((err) => {
          if (err.includes(403)) {
            setErrorMessage(UNAUTHRIZED_TOKEN_ERROR_MESSAGE)
          } else {
            setErrorMessage(UNAUTHRIZED_BAD_TOKEN_MESSAGE)
          }
        })
    } else {
      setheadertype("login")
      navigate("/signin", { replace: true })
    }
  }

  const closePopup = () => {
    setisEditProfilePopupOpen(false);
  }

  const handleFindMoviesClick = (findText, isShort) => {
    setIsLoading(true);
    moviesApi.findMovie()
      .then((data) => {
        if (data.length > 0) {
          const searchedMovies = data.filter((item) => item.nameRU.toLowerCase().includes(findText.toLowerCase()));
          const shortMovies = isShort ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies;
          localStorage.setItem('findText', findText);
          setMovies(shortMovies);
          localStorage.setItem('foundMovies', JSON.stringify(shortMovies));
          console.log(isShort);
          localStorage.setItem('isShortMovie', isShort);
          handleResize();
          setIsFound(true);
          return
        }
        else {
          setIsFound(false);
          return
        }
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setIsLoading(false) })
  }

  const handleResize = () => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies === null) {
      return
    }
    if (windowWidth >= 1280) {
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

  const handleDeleteMovieClick = (movie) => {
    const deleteMovie = savedMovies.find(item =>
      item.movieId === (movie.id || movie.movieId)
    )
    if (!deleteMovie) return
    mainApi.deleteMovie(deleteMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item =>
          item._id !== deleteMovie._id
        ))
        // getSavedMovies()
      })
      .catch((err) => { console.log(err) })
  }

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    mainApi.patchUserInfo(name, email)
      .then((data) => {
        getUserInfo()
        setIsInfoTooltipOpen(true)
      })
      .catch((err) => {
        if (err.includes(409)) {
          setErrorMessage(USER_EMAIL_CONFLICT_MESSAGE)
        } else {
          setErrorMessage(PROFILE_UPDATE_MESSAGE)
        }
      })
      .finally(() => { setIsLoading(false) })
  }

  const handleInfoClose = () => {
    setIsInfoTooltipOpen(false)
    closePopup()
  }

  function checkIsSaved(movie) {
    return savedMovies.some(item => (item._id === movie._id) || (item.movieId === (movie.movieId || movie.id)))
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
              checkIsSaved={checkIsSaved}
              savedMovies={savedMovies}
              onShowMore={handleShowMore}
              isLoading={isLoading}
              headerType={"movies"}
              onFindMoviesClick={handleFindMoviesClick}
              handleHeaderClick={headerButtonClick}
              handleSaveMovieClick={handleSaveMovieClick}
              handleDeleteMovieClick={handleDeleteMovieClick}
              listType='movies'
              isFound={isFound}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRouteElement element={SavedMovies}
              loggedIn={loggedIn}
              movies={savedMovies}
              checkIsSaved={checkIsSaved}
              headerType={"savedMovies"}
              handleHeaderClick={headerButtonClick}
              headerTypechange={setheadertype}
              isLoading={isLoading}
              handleDeleteMovieClick={handleDeleteMovieClick}
              listType='savedMovies'
            />}
          />
          <Route path="/profile" element={
            <ProtectedRouteElement element={Profile}
              loggedIn={loggedIn}
              headerType={"profile"}
              handleHeaderClick={headerButtonClick}
              handleEditClick={handleEditProfileOpen}
              handleDeleteUser={handleLogout}
              errorMessage={errorMessage}
            />}
          />
          <Route path="/signup" element={
            <Register
              headerType={"none"}
              isLoading={isLoading}
              onSubmit={handleRegister}
              handleClickLogo={headerButtonClick}
              headerTypechange={setheadertype}
              errorMessage={errorMessage}
            />
          } />
          <Route path="/signin" element={
            <Login
              headerType={"none"}
              handleLogin={handleLogin}
              handleClickLogo={headerButtonClick}
              headerTypechange={setheadertype}
              errorMessage={errorMessage}
            />} />
          <Route path="*" element={
            <NotFoundPage
              headerType={"none"}
              headerTypechange={setheadertype}
              handleClick={headerButtonClick} />} />
        </Routes>
        <PopupEdit isOpen={isEditProfilePopupOpen}
          onClose={closePopup}
          isLoading={isLoading}
          onUpdateUser={handleUpdateUser}
          errorMessage={errorMessage}
        />
        <InfoTooltip isOpen={isInfoTooltipOpen}
          onClose={handleInfoClose} />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
