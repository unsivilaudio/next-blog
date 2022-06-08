import classes from 'styles/components/home/FeaturedPosts.module.scss';

const FeaturedPosts = props => {
    return (
        <div className={classes.FeaturedPosts}>
            <div className={classes.Header}>Featured Posts</div>
            <ul className={classes.PostList}>
                <h3>No Posts to Display</h3>
            </ul>
        </div>
    );
};

export default FeaturedPosts;
