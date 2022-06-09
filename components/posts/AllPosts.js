import PostGrid from 'components/posts/PostGrid';
import classes from 'styles/components/posts/AllPosts.module.scss';

const AllPosts = props => {
    return (
        <div className={classes.AllPosts}>
            <div className={classes.Header}>All Posts</div>
            <PostGrid posts={props.posts} />
        </div>
    );
};

export default AllPosts;
