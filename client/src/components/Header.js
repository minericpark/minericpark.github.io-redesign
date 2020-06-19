import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import HeaderNav from './HeaderNav.js';

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
            <IconButton className={classes.mainIcon} key={"headerIcon"}>
                <SearchIcon />
            </IconButton>
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