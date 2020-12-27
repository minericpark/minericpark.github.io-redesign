import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import {IconContext} from "react-icons";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        bottom: 0,
    },
    footer: {
        position: "relative",
        padding: theme.spacing(2),
    }
}));

//Copyright content for footer
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" key={"copyright"}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/eric-p-422190128/" key={"copyrightLink"}>
                Eric Minseo Park
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

//Socials + Links for footer
function Socials(props) {
    const { social } = props;

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} key={"socials"}>
                {social.map((network) => (
                    <Grid item key={"socials" + network.name}>
                        <motion.div whileHover={{ scale: 1.3 }}>
                            <IconContext.Provider value={{ style: {fontSize: '23px', color: 'inherit'}}}>
                                <Link display="block" variant="body1" href={network.link} key={network.name}>
                                    <network.icon />
                                </Link>
                            </IconContext.Provider>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

//BlogPosts footer structure
function Footer(props) {
    const classes = useStyles();
    const { social } = props;

    return (
        <div className={classes.root} key={"footer"}>
            <Box className={classes.footer} component={Grid} boxShadow={3} container direction="row" justify="space-between" alignItems="center" key={"footerGrid"}>
                <Grid item key={"footerSocials"}>
                    <Socials social={social}/>
                </Grid>
                <Grid item key={"footerCopyright"}>
                    <Copyright />
                </Grid>
            </Box>
        </div>
    );
}

export default Footer;

Footer.propTypes = {
    social: PropTypes.array,
};