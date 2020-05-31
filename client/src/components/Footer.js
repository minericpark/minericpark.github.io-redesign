import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//Copyright content for footer
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/eric-p-422190128/">
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
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
            {social.map((network) => (
                <Grid item>
                    <Link display="block" variant="body1" href={network.link} key={network}>
                        <network.icon />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(5),
        padding: theme.spacing(2),
    },
}));

//Main footer structure
export default function Footer(props) {
    const classes = useStyles();
    const { social } = props;

    return (
        <footer className={classes.footer}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <Socials social={social}/>
                </Grid>
                <Grid item>
                    <Copyright />
                </Grid>
            </Grid>
        </footer>
    );
}

Footer.propTypes = {
    social: PropTypes.array,
};