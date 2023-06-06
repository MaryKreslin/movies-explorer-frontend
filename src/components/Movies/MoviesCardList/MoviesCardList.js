import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import preview from '../../../images/preview.jpg'
const MoviesCardList = (props) => {
    return (
        <>
            {
                props.isSaved &&
                <section className='moviesCardList'>
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isSaved />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isSaved />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isSaved/>
                </section>
            }
            {
                !props.isSaved &&
                <section className='moviesCardList'>
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={true} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={false} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={false} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={true} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={true} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={false} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={true} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={false} />
                    <MoviesCard name='В погоне за Бенкси' duration='27' preview={preview} isChecked={true} />
                </section>
            }
        </>
    )
}

export default MoviesCardList;