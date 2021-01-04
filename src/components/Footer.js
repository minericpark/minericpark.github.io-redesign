import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import SocialsCard from "./subcomponents/SocialsCard";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        bottom: 0,
    },
    footer: {
        position: "relative",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
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

//BlogPosts footer structure
function Footer(props) {
    const classes = useStyles();
    const { social } = props;

    return (
        <div className={classes.root} key={"footer"}>
            <Box className={classes.footer} component={Grid} boxShadow={3} container direction="row" justify="space-between" alignItems="center" key={"footerGrid"}>
                <Grid item key={"footerSocials"}>
                    <SocialsCard social={social} gridDirection='row'/>
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