import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
        padding: theme.spacing(4),
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    function navHover(e) {
        console.log("hovering over element" + e);
    }

    function navNoHover(e) {
        console.log("not hovering over element" + e);
    }

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} component="nav" variant="regular" key={"header"}>
                <IconButton className={classes.mainIcon} key={"headerIcon"}>
                    <SearchIcon />
                </IconButton>
                <div className={classes.space} key={"headerDiv"}></div>
                {sections.map((section) => (
                    <Grid item key={"header" + section.title}>
                        <Link
                            color="inherit"
                            underline="none"
                            noWrap
                            key={section.title}
                            variant="body1"
                            href={section.url}
                            className={classes.toolbarLink}
                            onMouseEnter={() => navHover(section.title)}
                            onMouseLeave={() => navNoHover(section.title)}
                        >
                            {section.title}
                        </Link>
                    </Grid>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};