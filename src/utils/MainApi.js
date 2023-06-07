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

    getUserInfo() {
        return fetch(`${this._url}/users/me`)
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

    saveMovie(movieData) {
        return fetch(`${this._url}/movies`, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify({
                data: movieData
            })
        })
    }
    deleteMovie(movieData) {
        return fetch(`${this._url}/movies`, {
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify({
                data: movieData
            })
        })
    }
}

const mainApi = new MainApi({
    baseURL: 'https://movies.kreslin.nomoredomains.monster',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi;