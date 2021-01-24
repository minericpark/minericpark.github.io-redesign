import React from 'react';
import PropTypes from 'prop-types';
import BlogAccordion from "./subcomponents/BlogAccordion";
import {motion} from "framer-motion";

const transition = {
    duration: 0.5,
};

const blogVariants = {
    enter: { x: 0, opacity: 1, transition },
    exit: { x: -100, opacity: 0, transition },
};

function BlogPosts(props) {
    const { posts } = props;

    return (
            <motion.div variants={{ enter: { transition: { staggerChildren: 0.4 } } }}>
                {posts.map((post) => (
                    <motion.div variants={blogVariants}>
                        <BlogAccordion post={post}/>
                    </motion.div>
                ))}
            </motion.div>
    );
}

export default BlogPosts;

BlogPosts.propTypes = {
    posts: PropTypes.array,
};