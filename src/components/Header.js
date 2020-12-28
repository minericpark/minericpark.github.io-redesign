import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import HeaderNav from './subcomponents/HeaderNav.js';
import { motion } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { IconContext } from "react-icons";
import theme from "./theme";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.contrastText,
        fontFamily: theme.typography.fontFamily,
    },
    space: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
    headerNav: {
        marginLeft: theme.spacing(4),
    },
}));

function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <AppBar className={classes.root}>
                <Toolbar component="nav" variant="regular" key={"header"}>
                    <motion.div key={"headerIcon"} whileHover={{ rotate: 360, scale: 1.1, transition: {duration: 1} }}>
                        <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.main}}}>
                            <Link underline="none" href="/">
                                <GiAcorn />
                            </Link>
                        </IconContext.Provider>
                    </motion.div>
                    <div className={classes.space} key={"headerDiv"}/>
                    {sections.map((section) => (
                        <Link
                            className={classes.headerNav}
                            noWrap
                            underline="none"
                            key={section.title}
                            variant="body2"
                            href={section.url}>
                            <HeaderNav section={section} key={"link" + section.title}/>
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </React.Fragment>
    );
}

export default Header;

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};