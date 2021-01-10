import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {motion} from "framer-motion";

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

const transition = {
    duration: 0.5,
};

const sidebarVariants = {
    enter: { opacity: 1, transition },
    exit: { opacity: 0, transition },
};

function Sidebar(props) {
    const classes = useStyles();
    const { archiveTitle, archives, description, title } = props;

    return (
        <motion.div variants={sidebarVariants}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography color="primary" variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography color="primary">{description}</Typography>
            </Paper>
            <Typography color="primary" variant="h6" gutterBottom className={classes.sidebarSection}>
                {archiveTitle}
            </Typography>
            {archives.map((archive) => (
                <Link color="secondary" display="block" variant="body1" href={archive.url} key={archive.title}>
                    {archive.title}
                </Link>
            ))}
        </motion.div>
    );
}

export default Sidebar;

Sidebar.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};