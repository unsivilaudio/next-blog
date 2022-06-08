import PostGrid from 'components/posts/PostGrid';
import classes from 'styles/components/home/FeaturedPosts.module.scss';

const FeaturedPosts = props => {
    return (
        <div className={classes.FeaturedPosts}>
            <div className={classes.Header}>Featured Posts</div>
            <PostGrid posts={props.posts} />
        </div>
    );
};

export default FeaturedPosts;
