import {useEffect, useState} from 'react';
import './App.scss';
import {BSMovieCard} from './components/Card/BSMovieCard.comp.tsx';
import {BSNavbar} from './components/Navbar/BSNavbar.comp.tsx';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

function App() {
    const [movies, setMovies] = useState<Movie[]>();

    // on mount
    useEffect(() => {
        async function getMovieData() {
            const movies = await fetch(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer ' + import.meta.env.VITE_TMDB_BEARER,
                    },
                },
            );

            const movieData = await movies.json();
            setMovies(movieData.results);
        }

        getMovieData();
        return () => {};
    }, []);

    // on update
    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <>
            <header>
                <BSNavbar
                    brand={'MovieList'}
                    navlinks={['Home', 'Movies', 'Pricing']}
                />
            </header>
            <main>
                <section className="movie-section">
                    {movies?.map(item => {
                        return (
                            <BSMovieCard
                                key={item.id}
                                title={item.title}
                                text={item.overview}
                                imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            />
                        );
                    }) || <div>Loading movies...</div>}
                </section>
            </main>
        </>
    );
}

export default App;
