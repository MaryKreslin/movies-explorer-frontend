import React from 'react';
import buttonIcon from '../../../images/button-checked.svg';
import deleteIcon from '../../../images/delete-icon.svg';

const MoviesCard = (props) => {
    return (
        <div className='movieCard'>
            <div className='movieCard__header'>
                <p className='movieCard__name'>{props.name}</p>
                <p className='movieCard__duration'>{props.duration} минут</p>
            </div>
            <img className='movieCard__preview' src={props.preview} />
            {props.isChecked && !props.isSaved && <button className='movieCard__button movieCard__button_clicked'>
                <img className='movieCard__buttonIcon' src={buttonIcon} />
            </button>
            }
            {!props.isChecked && !props.isSaved && <button className='movieCard__button'>
                <p className='movieCard__buttonText'>Сохранить</p>
            </button>
            }
            {props.isSaved && <button className='movieCard__button'>
                <img className='movieCard__buttonIcon' src={deleteIcon} />
            </button>}
        </div>
    )
}

export default MoviesCard;