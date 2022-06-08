import PostItem from './PostItem';
import classes from 'styles/components/posts/PostGrid.module.scss';

const PostGrid = ({ posts = [] }) => {
    const allPosts = posts.length ? (
        posts.map(post => <PostItem key={post.slug} post={post} />)
    ) : (
        <h3 className={classes.Empty}>No Posts To Display</h3>
    );

    return <ul className={classes.PostGrid}>{allPosts}</ul>;
};

export default PostGrid;
