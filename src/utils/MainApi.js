class MainApi {
    constructor(options) {
        this._options = options;
        this._url = this._options.baseURL;
        this._headers = this._options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
           
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "email": email, "password": password })
        })
            .then(this._checkResponse)
    };

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
          
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })
            .then(this._checkResponse)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    return data
                }
            })
    };

    checkToken(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
    }

    updateToken(token) {
        this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    patchUserInfo(newName, newEmail) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: newName,
                email: newEmail
            })
        })
            .then(this._checkResponse)
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    saveMovie(movieData) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: movieData.country,
                director: movieData.director,
                duration: movieData.duration,
                year: movieData.year,
                description: movieData.description,
                image: `https://api.nomoreparties.co/${movieData.image.url}`,
                trailerLink: movieData.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${movieData.image.previeUrl}`,
                owner: movieData.owner,
                movieId: movieData.id,
                nameRU: movieData.nameRU,
                nameEN: movieData.nameEN
            })
        })
            .then(this._checkResponse)
    }

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    baseURL: 'https://api.movies.kreslin.nomoredomains.monster',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`

    }
})

export default mainApi;