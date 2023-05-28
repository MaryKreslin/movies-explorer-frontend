import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';

const Movies = (props) => {
    return (
        <>
            <Header type={props.headerType} />
            <SearchForm />
        </>
    )
}

export default Movies;