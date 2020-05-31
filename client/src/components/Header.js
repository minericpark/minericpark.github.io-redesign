import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    space: {
        flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    navLink: {
        marginLeft: '3.5%',
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar} component="nav" variant="regular">
                <IconButton className={classes.mainIcon}>
                    <SearchIcon />
                </IconButton>
                <div className={classes.space}></div>
                {sections.map((section) => (
                    <Grid item className={classes.navLink}>
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body1"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    </Grid>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};