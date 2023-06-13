import React from "react";
import infoImage from "../../images/success-svgrepo-com.svg";

const InfoTooltip = (props) => {

    const handleClose = () => { props.onClose() }

    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={(event) => event.target === event.currentTarget && handleClose()}>
            <form className="popup__content">
                <button aria-label="Закрыть" className="popup__close-button" type="button" onClick={handleClose}></button>
                <fieldset className="popup__fieldset">
                    <img src={infoImage} className="popup__infoImage" alt="" />
                    <p className="popup__title">Информация о пользователе успешно обновлена!</p>
                </fieldset>
            </form>
        </div>
    )
}
export default InfoTooltip;