import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import { motion } from "framer-motion";
import { GiAcorn } from "react-icons/gi";
import { IconContext } from "react-icons";
import theme from "../common/theme";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

}));

function isHome(givenLocation) {
    return givenLocation === '/' ? true: false;
}

function HeaderLogo(props) {
    const classes = useStyles();
    const location = useLocation();

    if (isHome(location.pathname)) {
        return (
            <motion.div key={"headerIcon"} whileHover={{ rotate: 360, scale: 1.1, transition: {duration: 1} }}>
                <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.contrastText}}}>
                    <Link underline="none" to={'/'}>
                        <GiAcorn />
                    </Link>
                </IconContext.Provider>
            </motion.div>
        );
    } else {
        return (
            <motion.div key={"headerIcon"} whileHover={{ rotate: 360, scale: 1.1, transition: {duration: 1} }}>
                <IconContext.Provider value={{ style: {fontSize: '35px', color: theme.palette.primary.main}}}>
                    <Link underline="none" to={'/'}>
                        <GiAcorn />
                    </Link>
                </IconContext.Provider>
            </motion.div>
        );
    }
}

export default HeaderLogo;

HeaderLogo.propTypes = {
};