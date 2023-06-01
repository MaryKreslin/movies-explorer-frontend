import React, { useState, useRef } from "react";
import FormValidator from "../../utils/FormValidator";
import { validationConfig } from "../../utils/utils";
import Line from "../Line/Line";

const PopupEdit = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const popupRef = useRef();

    React.useEffect(() => {
        const PopupValidator = new FormValidator(validationConfig, popupRef.current);
        PopupValidator.enableValidation();
    }, [props.isOpen])

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
        <div className={`popupEdit ${props.isOpen ? "popupEdit_opened" : ""}`}>
            <form ref={popupRef} className="popupEdit__content" name='edit' onSubmit={props.onSubmit}>
                <button aria-label="Закрыть" className="popupEdit__close-button" type="button" onClick={props.onClose}></button>
                <h2 className='profile__header'>Привет, {props.userName}!</h2>
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
                <p className="form__error name-error"></p>
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
                <p className="form__error email-error"></p>
                <button type="submit" className="form__save-button">
                    <p className='form__buttonText'>Сохранить</p>
                </button>
            </form>
        </div >
    )
}

export default PopupEdit;