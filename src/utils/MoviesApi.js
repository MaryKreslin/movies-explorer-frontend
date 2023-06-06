class MoviesApi {
    constructor(options) {
        this._options = options;
        this._url = this._options.baseURL;
        this._headers = this._options.headers;
    }

    findMovie() {
        return fetch(`${this._url}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}

const moviesApi = new MoviesApi({
    baseURL: 'https://api.nomoreparties.co/beatfilm-movies'
}
)

export default moviesApi;
