import React from "react";
import success from "../../images/auth-success.png";
import failed from "../../images/auth-failed.png";

const InfoTooltip = (props) => {

    const [infoImage, setinfoImage] = React.useState();

    React.useEffect(() => {
        if (props.type === "reg-success") {
            setinfoImage(success)
        } else {
            setinfoImage(failed)
        }
    }, [props.type])

    const handleClose = () => { props.onClose(props.type) }

    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <form className="popup__content">
                <button aria-label="Закрыть" className="popup__close-button" type="button" onClick={handleClose}></button>
                <fieldset className="popup__fieldset">
                    <img src={infoImage} className="popup__infoImage" alt="" />
                    <p className="popup__title">{props.text}</p>
                </fieldset>
            </form>
        </div>
    )
}
export default InfoTooltip;