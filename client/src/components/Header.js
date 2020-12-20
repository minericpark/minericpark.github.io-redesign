import React from 'react';
import PropTypes from 'prop-types';
import {hexToRgb, makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import HeaderNav from './HeaderNav.js';
import { motion } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { IconContext } from "react-icons";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <Toolbar className={classes.toolbar} component="nav" variant="regular" key={"header"}>
            <motion.div key={"headerIcon"} whileHover={{ rotate: 360, transition: {duration: 1} }}>
                <IconContext.Provider value={{ style: {fontSize: '35px', color: hexToRgb(theme.palette.primary.main)}}}>
                    <GiAcorn />
                </IconContext.Provider>
            </motion.div>
            <div className={classes.space} key={"headerDiv"}></div>
            {sections.map((section) => (
                <Link
                    color="textSecondary"
                    noWrap
                    underline="none"
                    key={section.title}
                    variant="body2"
                    href={section.url}>
                    <HeaderNav section={section} key={"header" + section.title}/>
                </Link>
            ))}
        </Toolbar>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};