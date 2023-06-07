import React, { useState } from 'react';
import buttonIcon from '../../../images/button-checked.svg';
import deleteIcon from '../../../images/delete-icon.svg';
import { useEffect } from 'react';

const MoviesCard = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [duration, setDuration] = useState({ hours: "", minutes: "" });

    const toggleClick = () => {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        if (props.duration < 60) {
            setDuration({ hours: "", minutes: `${props.duration} мин` })
        } else {
            const h = Math.floor(props.duration / 60);
            const m = (props.duration % 60);
            setDuration({ hours: `${h} ч `, minutes: `${m} мин` })
        }
    }, [])


    return (
        <div className='movieCard'>
            <div className='movieCard__header'>
                <p className='movieCard__name'>{props.name}</p>
                <p className='movieCard__duration'>{duration.hours} {duration.minutes}</p>
            </div>
            <a href={props.trailer} className='movieCard__link' target='blank'>
                <img className='movieCard__preview' src={props.preview} alt='Превью фильма' />
            </a>
            {!props.isSaved && isChecked &&
                <button className='movieCard__button movieCard__button_clicked' onClick={toggleClick}>
                    <img className='movieCard__buttonIcon' src={buttonIcon} alt='Добавить в список сохраненных' />
                </button>
            }
            {!props.isSaved && !isChecked &&
                <button className='movieCard__button' onClick={toggleClick}>
                    <p className='movieCard__buttonText'>Сохранить</p>
                </button>
            }
            {props.isSaved &&
                <button className='movieCard__button' onClick={toggleClick}>
                    <img className='movieCard__buttonIcon' src={deleteIcon} alt='Удалить из сохраненных' />
                </button>}
        </div>
    )
}

export default MoviesCard;