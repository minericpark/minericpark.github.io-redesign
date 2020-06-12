import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import HeaderNav from './HeaderNav.js';
import MainPage from "../pages/HomePage";
import TestPage from "../pages/TestPage";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
        padding: theme.spacing(4),
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} component="nav" variant="regular" key={"header"}>
                <IconButton className={classes.mainIcon} key={"headerIcon"}>
                    <SearchIcon />
                </IconButton>
                <div className={classes.space} key={"headerDiv"}></div>
                <Router>
                    {sections.map((section) => (
                        <NavLink to={section.url} >
                            <HeaderNav section={section} key={"header" + section.title}/>
                        </NavLink>
                    ))}
                    <Route exact path="/home" component={MainPage} />
                    <Route path="/test" component={TestPage} />
                </Router>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};