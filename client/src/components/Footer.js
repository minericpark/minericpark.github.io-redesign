import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";
import {IconContext} from "react-icons";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        bottom: 0,
        position: "relative",
    },
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

//BlogPost footer structure
export default function Footer(props) {
    const classes = useStyles();
    const { social } = props;

    return (
        <footer className={classes.footer} key={"footer"}>
            <Grid container direction="row" justify="space-between" alignItems="center" key={"footerGrid"}>
                <Grid item key={"footerSocials"}>
                    <Socials social={social}/>
                </Grid>
                <Grid item key={"footerCopyright"}>
                    <Copyright />
                </Grid>
            </Grid>
        </footer>
    );
}

Footer.propTypes = {
    social: PropTypes.array,
};