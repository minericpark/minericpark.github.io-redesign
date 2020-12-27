import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    toolbarLink: {
        padding: theme.spacing(2.5),
        color: theme.palette.primary.lighterMain,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'inherit',
        },
    },
    space: {
        flexGrow: 1,
    },
}));

function HeaderNav(props) {
    const classes = useStyles();
    const { section } = props;

    function navHover(e) {
        console.log("hovering over element" + e);
    }

    function navNoHover(e) {
        console.log("not hovering over element" + e);
    }

    return (
        <Grid item key={"nav" + section.title}>
            <Typography>
                <MenuItem
                    noWrap
                    className={classes.toolbarLink}
                    key={"menu" + section.title}
                    variant="body1"
                    onMouseEnter={() => navHover()}
                    onMouseLeave={() => navNoHover()}>
                    {section.title}
                </MenuItem>
            </Typography>
        </Grid>
    );
}

export default HeaderNav;