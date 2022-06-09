import AllPosts from 'components/posts/AllPosts';
import { getAllPosts } from 'lib/posts-util';
import classes from 'styles/pages/AllPostsPage.module.scss';

const AllPostsPage = props => {
    return (
        <div className={classes.AllPostsPage}>
            <AllPosts posts={props.posts} />
        </div>
    );
};

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts,
            revalidate: 86400,
        },
    };
}

export default AllPostsPage;
