const BAD_LOGIN_PASSWORD_MESSAGE = 'Вы ввели неправильный логин или пароль.';
const UNAUTHRIZED_TOKEN_ERROR_MESSAGE = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const UNAUTHRIZED_BAD_TOKEN_MESSAGE = 'При авторизации произошла ошибка. Переданный токен некорректен.';

const USER_EMAIL_CONFLICT_MESSAGE = 'Пользователь с таким email уже существует.';
const REGISTER_ERROR_MESSAGE = 'При регистрации пользователя произошла ошибка.';

const PROFILE_UPDATE_MESSAGE = 'При обновлении профиля произошла ошибка.';
//500
const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка.';
//404
const PAGE_NOT_FOUNF_MESSAGE = 'Страница по указанному маршруту не найдена.';

const EMAIL_REGEX = "([A-z0-9._%+-]{1,})@([A-z0-9_.-]{1,})[.]([A-z]{2,8})"

const NUMBER_MOVIES_ON_320_480 = 5;
const NUMBER_MOVIES_ON_481_768 = 8;
const NUMBER_MOVIES_ON_769 = 12;

const SHORT_MOVIE_DURATION = 40;

export {
    BAD_LOGIN_PASSWORD_MESSAGE,
    UNAUTHRIZED_TOKEN_ERROR_MESSAGE,
    UNAUTHRIZED_BAD_TOKEN_MESSAGE,
    USER_EMAIL_CONFLICT_MESSAGE,
    REGISTER_ERROR_MESSAGE,
    PROFILE_UPDATE_MESSAGE,
    SERVER_ERROR_MESSAGE,
    PAGE_NOT_FOUNF_MESSAGE,
    EMAIL_REGEX,
    NUMBER_MOVIES_ON_320_480,
    NUMBER_MOVIES_ON_481_768,
    NUMBER_MOVIES_ON_769,
    SHORT_MOVIE_DURATION
};
