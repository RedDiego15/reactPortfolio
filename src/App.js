import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Theme } from './styles/Theme';

function App() {
    return (
        <Theme theme={'light'}>
            <Header></Header>
            <Hero></Hero>
        </Theme>
    );
}

export default App;
