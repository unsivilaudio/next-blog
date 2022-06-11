import AllPosts from 'components/posts/AllPosts';
import { getAllPosts } from 'lib/posts-util';
import classes from 'styles/pages/AllPostsPage.module.scss';

const AllPostsPage = props => {
    return (
        <div className={classes.AllPostsPage}>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts.'
                />
            </Head>
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
