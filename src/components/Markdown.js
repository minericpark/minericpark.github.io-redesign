import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//Note: Modified markdown files to be a javascript file that returns a string object
//Original markdown format does not work with markdowns with create-react-app thus must use javascript objects instead

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(0),
    },
    divider: {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
});

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                variant: 'h5',
                color: 'primary'
            },
        },
        h2: { component: Typography, props: { gutterBottom: true, variant: 'h6', color: 'primary' } },
        h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1', color: 'primary' } },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true, color: 'secondary' },
        },
        p: { component: Typography, props: { paragraph: true } },
        a: { component: Link },
        li: {
            component: withStyles(styles)(({ classes, ...props }) => (
                <li className={classes.listItem}>
                    <Typography {...props} />
                </li>
            )),
            props: { color: 'tertiary' }
        },
    },
};

function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;