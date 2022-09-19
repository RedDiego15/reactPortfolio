import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

const themes = {
    light: {
        background_color: 'white',
        header_color: '#000000',
        header_btn_color: 'white',
        arrow_intro_color: 'black',
    },
    dark: {},
};

export const Theme = (props) => (
    <ThemeProvider theme={themes[props.theme]}>
        <GlobalStyles />
        {props.children}
    </ThemeProvider>
);
