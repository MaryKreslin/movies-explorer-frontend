import React, { useState } from 'react';
import buttonIcon from '../../../images/button-checked.svg';
import deleteIcon from '../../../images/delete-icon.svg';

const MoviesCard = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleClick = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className='movieCard'>
            <div className='movieCard__header'>
                <p className='movieCard__name'>{props.name}</p>
                <p className='movieCard__duration'>{props.duration} минут</p>
            </div>
            <img className='movieCard__preview' src={props.preview} alt='Превью фильма'/>
            {!props.isSaved && isChecked &&
                <button className='movieCard__button movieCard__button_clicked' onClick={toggleClick}>
                    <img className='movieCard__buttonIcon' src={buttonIcon} alt='Добавлен в список сохраненных'/>
                </button>
            }
            {!props.isSaved &&  !isChecked &&
            <button className='movieCard__button' onClick={toggleClick}>
                <p className='movieCard__buttonText'>Сохранить</p>
            </button>
            }
            {props.isSaved && 
            <button className='movieCard__button' onClick={toggleClick}>
                <img className='movieCard__buttonIcon' src={deleteIcon} alt='Удалить из сохраненных'/>
            </button>}
        </div>
    )
}

export default MoviesCard;