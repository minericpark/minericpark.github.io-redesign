import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbarLink: {
        padding: theme.spacing(2.5),
        color: 'inherit',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'inherit',
        },
    },
    space: {
        flexGrow: 1,
    },
    headerNav: {
        marginLeft: theme.spacing(4),
    },
    headerLink: {
        textDecoration: 'none',
        color: 'inherit',
    }
}));

function HeaderNav(props) {
    const classes = useStyles();
    const { section, link } = props;

    function navHover(e) {
        console.log("hovering over element" + e);
    }

    function navNoHover(e) {
        console.log("not hovering over element" + e);
    }

    return (
        <Grid item className={classes.headerNav} key={"nav" + section.title}>
            <Typography>
                <MenuItem
                    noWrap
                    className={classes.toolbarLink}
                    key={"menu" + section.title}
                    variant="body1"
                    onMouseEnter={() => navHover()}
                    onMouseLeave={() => navNoHover()}
                    component={Link}
                    to={link}>
                    {section.title}
                </MenuItem>
            </Typography>
        </Grid>
    );
}

export default HeaderNav;