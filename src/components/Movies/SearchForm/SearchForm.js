import React, { useState, useEffect } from 'react';
import Line from '../../Line/Line';

const SearchForm = (props) => {
    const [findText, setfindText] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setfindText('')
        setCheckbox(false)
    }, [])

    const findMovie = (evt) => {
        evt.preventDefault()
        props.onFindClick(findText, checkbox)
    }


    function handleChangeFindMovie(e) {
        setfindText(e.target.value)
    }

    function handleChangeCheckbox(e) {
        const isShortMovies = e.target.checked;
        setCheckbox(isShortMovies);
        props.onFindClick(findText, isShortMovies)
    }

    return (
        <section className='searchForm'>
            <div className='searchForm__block'>
                <input className='searchForm__input'
                    placeholder='Фильм'
                    type='text'
                    name='searchMovie'
                    id='searchMovie'
                    value={findText}
                    onChange={handleChangeFindMovie} />
                <button className='searchForm__button' onClick={findMovie}>
                    <p className='searchForm__buttonText'>Найти</p>
                </button>
            </div>
            <div className='searchForm__toggle-block'>
                <div className='searchForm__toggle'>
                    <input type="checkbox" className='searchForm__checkbox' id="switch"
                        checked={checkbox}
                        onChange={handleChangeCheckbox} />
                    <label htmlFor='switch' className='searchForm__label'>Toggle</label>
                </div>
                <p className='searchForm__toggle-label'>Короткометражки</p>
            </div>
            <Line color='grey' />
        </section>
    )
}

export default SearchForm;