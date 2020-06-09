import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    toolbar: {

    },
    toolbarLink: {
        padding: theme.spacing(4),
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
    },
}));

export default function HeaderNav(props) {
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
            <Typography className={classes.toolbar}>
                <Link
                    color="primary"
                    underline="none"
                    noWrap
                    className={classes.toolbarLink}
                    key={section.title}
                    variant="body1"
                    href={section.url}
                    onMouseEnter={() => navHover()}
                    onMouseLeave={() => navNoHover()}
                >
                    {section.title}
                </Link>
            </Typography>
        </Grid>
    );
}