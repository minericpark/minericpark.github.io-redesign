import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import HeaderNav from './HeaderNav.js';
import { motion } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { IconContext } from "react-icons";
import theme from "./theme";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    appbarMain: {
        backgroundColor: theme.palette.primary.contrastText,
    },
    offset: theme.mixins.toolbar,
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <AppBar className={classes.appbarMain}>
                <Toolbar component="nav" variant="regular" key={"header"}>
                    <motion.div key={"headerIcon"} whileHover={{ rotate: 360, transition: {duration: 1} }}>
                        <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.main}}}>
                            <Link underline="none" href="/">
                                <GiAcorn />
                            </Link>
                        </IconContext.Provider>
                    </motion.div>
                    <div className={classes.space} key={"headerDiv"}></div>
                    {sections.map((section) => (
                        <Link
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

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};