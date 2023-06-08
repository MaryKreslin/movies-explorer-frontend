import React, { useState } from 'react';
import buttonIcon from '../../../images/button-checked.svg';
import deleteIcon from '../../../images/delete-icon.svg';
import { useEffect } from 'react';

const MoviesCard = (props) => {
    const [isSaved, setIsSaved] = useState(false);
    const [duration, setDuration] = useState({ hours: "", minutes: "" });

    const toggleClick = () => {
        setIsSaved(!isSaved)
    }

    const handleSaveMovie = () => {
        props.onSaveClick(props.data)
        toggleClick()
    }

    useEffect(() => {
        if (props.data.duration < 60) {
            setDuration({ hours: "", minutes: `${props.data.duration} мин` })
        } else {
            const h = Math.floor(props.data.duration / 60);
            const m = (props.data.duration % 60);
            setDuration({ hours: `${h} ч `, minutes: `${m} мин` })
        }
    }, [])


    return (
        <div className='movieCard'>
            <div className='movieCard__header'>
                <p className='movieCard__name'>{props.data.nameRU}</p>
                <p className='movieCard__duration'>{duration.hours} {duration.minutes}</p>
            </div>
            <a href={props.data.trailer} className='movieCard__link' target='blank'>
                <img className='movieCard__preview' src={`https://api.nomoreparties.co/${props.data.image.url}`} alt='Превью фильма' />
            </a>
            {(props.listType === 'movies' && isSaved) &&
                <button className='movieCard__button movieCard__button_clicked' onClick={handleSaveMovie}>
                    <img className='movieCard__buttonIcon' src={buttonIcon} alt='Добавить в список сохраненных' />
                </button>
            }
            {(props.listType === 'movies' && !isSaved) &&
                <button className='movieCard__button' onClick={handleSaveMovie}>
                    <p className='movieCard__buttonText'>Сохранить</p>
                </button>
            }
            {(props.listType === 'savedMovies') &&
                <button className='movieCard__button' onClick={handleSaveMovie}>
                    <img className='movieCard__buttonIcon' src={deleteIcon} alt='Удалить из сохраненных' />
                </button>}
        </div>
    )
}

export default MoviesCard;