import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import SocialsCard from "./SocialsCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import CopyrightText from "./CopyrightText";

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

function Footer(props) {
    const classes = useStyles();
    const { social } = props;

    return (
        <BottomNavigation className={classes.root} key={"footer"}>
            <Box className={classes.footer} component={Grid} boxShadow={3} container direction="row" justify="space-between" alignItems="center" key={"footerGrid"}>
                <Grid item key={"footerSocials"}>
                    <SocialsCard social={social} gridDirection='row'/>
                </Grid>
                <Grid item key={"footerCopyright"}>
                    <CopyrightText copyrightLabel={'Eric Minseo Park'} />
                </Grid>
            </Box>
        </BottomNavigation>
    );
}

export default Footer;

Footer.propTypes = {
    social: PropTypes.array,
};