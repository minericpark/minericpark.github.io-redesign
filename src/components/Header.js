import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderNav from './subcomponents/HeaderNav.js';
import { motion } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { IconContext } from "react-icons";
import theme from "./common/theme";
import AppBar from "@material-ui/core/AppBar";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.contrastText,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.lighterMain,
        overflowX: 'auto',
    },
    altRoot: {
        background: 'transparent',
        boxShadow: 'none',
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.contrastText,
        overflowX: 'auto',
    },
    space: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
}));

function isHome(givenLocation) {
    return givenLocation === '/' ? true: false;
}

function Header(props) {
    const classes = useStyles();
    const { sections } = props;
    const location = useLocation();

    if (isHome(location.pathname)) {
        return (
            <React.Fragment>
                <AppBar className={classes.altRoot}>
                    <Toolbar component="nav" variant="regular" key={"header"}>
                        <motion.div key={"headerIcon"} whileHover={{ rotate: 360, scale: 1.1, transition: {duration: 1} }}>
                            <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.contrastText}}}>
                                <Link underline="none" to={'/'}>
                                    <GiAcorn />
                                </Link>
                            </IconContext.Provider>
                        </motion.div>
                        <div className={classes.space} key={"headerDiv"}/>
                        {sections.map((section) => (
                            <HeaderNav section={section} link={section.url} key={"link" + section.title}/>
                        ))}
                    </Toolbar>
                </AppBar>
                <div className={classes.offset} />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <AppBar className={classes.root}>
                    <Toolbar component="nav" variant="regular" key={"header"}>
                        <motion.div key={"headerIcon"} whileHover={{ rotate: 360, scale: 1.1, transition: {duration: 1} }}>
                            <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.main}}}>
                                <Link underline="none" to={'/'}>
                                    <GiAcorn />
                                </Link>
                            </IconContext.Provider>
                        </motion.div>
                        <div className={classes.space} key={"headerDiv"}/>
                        {sections.map((section) => (
                            <HeaderNav section={section} link={section.url} key={"link" + section.title}/>
                        ))}
                    </Toolbar>
                </AppBar>
                <div className={classes.offset} />
            </React.Fragment>
        );
    }
}

export default Header;

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};