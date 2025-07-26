import './App.scss';
import {BSMovieCard} from './components/Card/BSMovieCard.comp.tsx';
import {BSNavbar} from './components/Navbar/BSNavbar.comp.tsx';

function App() {
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
                    <BSMovieCard />
                    <BSMovieCard />
                    <BSMovieCard />
                    <BSMovieCard />
                    <BSMovieCard />
                    <BSMovieCard />
                </section>
            </main>
        </>
    );
}

export default App;
