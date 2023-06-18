import React, { useState } from 'react';
import buttonIcon from '../../../images/button-checked.svg';
import deleteIcon from '../../../images/delete-icon.svg';
import { useEffect } from 'react';

const MoviesCard = (props) => {

    const [duration, setDuration] = useState({ hours: "", minutes: "" });
    const [saveButtonStyle, setSaveButtonStyle] = useState({});
    const [isSaved, setIsSaved] = useState();

    useEffect(() => {
        setIsSaved(props.checkIsSaved(props.data))
    }, [props])

    useEffect(() => {
        if (isSaved) {
            setSaveButtonStyle({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EE3465',
                padding: '12.5px 46px',
                margin: 0,
                width: '100px',
                height: '29px',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
            })
        } else {
            setSaveButtonStyle({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                padding: '9px 15px',
                width: '100px',
                height: '29px',
                border: 'none',
                background: '#313131',
                borderRadius: '30px',
                cursor: 'pointer',
            })
        }
    }, [isSaved])

    const handleSaveMovie = () => {
        props.onSaveClick(props.data)

    }

    const handleDeleteMovie = () => {
        props.onDeleteMovie(props.data)
    }

    useEffect(() => {
        if (props.data.duration < 60) {
            setDuration({ hours: "", minutes: `${props.data.duration} мин` })
        } else {
            const hours = Math.floor(props.data.duration / 60);
            const mimutes = (props.data.duration % 60);
            setDuration({ hours: `${hours} ч `, minutes: `${mimutes} мин` })
        }
    }, [props])

    return (
        <div className='movieCard'>
            <div className='movieCard__header'>
                <p className='movieCard__name'>{props.data.nameRU}</p>
                <p className='movieCard__duration'>{duration.hours} {duration.minutes}</p>
            </div>
            <a href={props.data.trailerLink} className='movieCard__link' target='blank'>
                {props.listType === 'movies' && <img className='movieCard__preview' src={`https://api.nomoreparties.co/${props.data.image.url}`} alt='Превью фильма' />}
                {props.listType === 'savedMovies' && <img className='movieCard__preview' src={props.data.image} alt='Превью фильма' />}
            </a>
            {(props.listType === 'movies') && isSaved &&
                <button style={saveButtonStyle} onClick={handleDeleteMovie}>
                    <img className='movieCard__buttonIcon' src={buttonIcon} alt='Добавлен в список сохраненных' />
                </button>
            }
            {(props.listType === 'movies') && !isSaved &&
                <button style={saveButtonStyle} onClick={handleSaveMovie}>
                    <p className='movieCard__buttonText'>Сохранить</p>
                </button>
            }
            {(props.listType === 'savedMovies') &&
                <button className='movieCard__button' onClick={handleDeleteMovie}>
                    <img className='movieCard__buttonIcon' src={deleteIcon} alt='Удалить из сохраненных' />
                </button>}
        </div>
    )
}

export default MoviesCard;