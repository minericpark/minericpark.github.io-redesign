import { createMuiTheme } from '@material-ui/core';
import '../App.css';

const mainFont = "'Quicksand', sans-serif";
const secondaryFont = "'Raleway', sans-serif";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8e8d8a',
            lighterMain: '#ddd8d5',
            contrastText: '#fff',
        }, //#f0f6f7ff
        secondary: {
            main: '#a89c94ff',
            contrastText: '#fff',
        },
        tertiary: {
            main: '#f0f6f7ff',
        },
        primaryCard: {
            main: '#8e8d8a',
            lighterMain: '#ddd8d5',
            contrastText: '#fff',
        }
    },
    typography: {
        fontFamily: [
            mainFont,
            secondaryFont
        ],
    },
    status: {
        warning: '#bf360c',
    },
});

export default theme;