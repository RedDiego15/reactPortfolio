import './App.css';
import { AboutMe } from './Components/AboutMe';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { AppContext } from './Context/AppContext';
import { Theme } from './styles/Theme';
import { useInitialState } from './Hooks/useInitialState';
import { Portfolio } from './Components/Portfolio';
import { Courses } from './Components/Courses';

function App() {
    const initialState = useInitialState();
    return (
        <Theme theme={'light'}>
            <AppContext.Provider value={initialState}>
                <Header></Header>
                <Hero></Hero>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
                <Courses></Courses>
            </AppContext.Provider>
        </Theme>
    );
}

export default App;
