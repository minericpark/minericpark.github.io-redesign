import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#002f30',
            contrastText: '#fff',
        },
        secondary: {
            main: '#2c7873',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Arial',
        ].join(','),
    },
    status: {
        warning: '#bf360c',
    },
});

export default theme;