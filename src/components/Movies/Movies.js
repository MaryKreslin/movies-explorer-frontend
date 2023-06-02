import React, { useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

const Movies = (props) => {

    useEffect(() => {
        props.headerTypechange("movies")
    }, [])

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <SearchForm />
                    <MoviesCardList />
                    <section className='more'>
                        <button className='more__button'>
                            <p className='more__buttonText'>Ещё</p>
                        </button>
                    </section>
                    <Footer />
                </>
            }
        </>
    )
}

export default Movies;