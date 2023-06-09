import React, { useState, useRef, useContext, useEffect } from "react";
import FormValidator from "../../utils/FormValidator";
import { validationPopupConfig } from "../../utils/utils";
import Line from "../Line/Line";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const PopupEdit = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const popupRef = useRef();

    React.useEffect(() => {
        const PopupValidator = new FormValidator(validationPopupConfig, popupRef.current);
        PopupValidator.enableValidation();
    }, [props.isOpen])

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email)
    }, [currentUser]
    )

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onUpdateUser(name, email);
    }

    return (
        <div className={`popupEdit ${props.isOpen ? "popupEdit_opened" : ""}`} onClick={(event) => event.target === event.currentTarget && props.onClose()}  >
            <form ref={popupRef} className="popupEdit__content" name='edit' onSubmit={handleSubmit}>
                <button aria-label="Закрыть" className="popupEdit__close-button" type="button" onClick={props.onClose}></button>
                <h2 className='profile__header'>Привет, {name}!</h2>
                <div className='profile__lineBlock'>
                    <p className='profile__label'>Имя</p>
                    <input
                        type="text"
                        className="profile__text"
                        id="name"
                        name="name"
                        placeholder="Имя"
                        value={name || ""}
                        onChange={handleChangeName}
                        required
                        autoComplete='false'
                    />
                </div>
                <Line color='grey' isShort={true} />
                <div className='profile__lineBlock'>
                    <p className='profile__label'>E-mail</p>
                    <input
                        type="email"
                        className="profile__text"
                        id="email"
                        name="email"
                        placeholder="Адрес электронной почты"
                        value={email || ""}
                        onChange={handleChangeEmail}
                        required
                        autoComplete='false'
                    />
                </div>
                <div className="popup__errorBlock">
                    <p className="popup__error email-error"></p>
                    <p className="popup__error name-error"></p>
                </div>
                <button type="submit" className="popup__save-button">
                    <p className='form__buttonText'>Сохранить</p>
                </button>
            </form>
        </div >
    )
}

export default PopupEdit;