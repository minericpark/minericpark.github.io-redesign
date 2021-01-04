import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2
    },
    card: {
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(2.5, 2.5),
        marginTop: theme.spacing(2)
    }

}));

function BlogPosts(props) {
    const classes = useStyles();
    const { posts } = props;

    return (
        <div>
            {posts.map((post) => (
                <Card className={classes.card}>
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                </Card>
            ))}
        </div>
    );
}

export default BlogPosts;

BlogPosts.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
    xsNum: PropTypes.string,
    mdNum: PropTypes.string,
};