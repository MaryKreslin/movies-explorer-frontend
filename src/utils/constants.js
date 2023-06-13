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


export {
    BAD_LOGIN_PASSWORD_MESSAGE,
    UNAUTHRIZED_TOKEN_ERROR_MESSAGE,
    UNAUTHRIZED_BAD_TOKEN_MESSAGE,
    USER_EMAIL_CONFLICT_MESSAGE,
    REGISTER_ERROR_MESSAGE,
    PROFILE_UPDATE_MESSAGE,
    SERVER_ERROR_MESSAGE,
    PAGE_NOT_FOUNF_MESSAGE
};
