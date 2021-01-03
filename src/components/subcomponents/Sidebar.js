import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

function Sidebar(props) {
    const classes = useStyles();
    const { archives, description, title } = props;

    return (
        <div>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography color="primary" variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography color="primary">{description}</Typography>
            </Paper>
            <Typography color="primary" variant="h6" gutterBottom className={classes.sidebarSection}>
                Project Archives
            </Typography>
            {archives.map((archive) => (
                <Link color="secondary" display="block" variant="body1" href={archive.url} key={archive.title}>
                    {archive.title}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;

Sidebar.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};