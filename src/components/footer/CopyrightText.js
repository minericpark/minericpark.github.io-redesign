import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({

}));

function CopyrightText(props) {
    const { copyrightLabel } = props;

    return (
        <Typography variant="body2" color="textSecondary" key={"copyright"}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/eric-p-422190128/" key={"copyrightLink"}>
                {copyrightLabel}
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default CopyrightText;

CopyrightText.propTypes = {
    copyrightLabel: PropTypes.string,
};