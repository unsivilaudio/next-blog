import Head from 'next/head';

import PostDetail from 'components/posts/PostDetail';
import { getPostFiles, getPostData } from 'lib/posts-util';
import classes from 'styles/pages/PostDetailPage.module.scss';

const PostDetailPage = props => {
    if (!props.post) return;

    return (
        <div className={classes.PostDetailPage}>
            <Head>
                <title>{props.post.title} | Bloggr</title>
                <meta name='description' content={props.post.excerpt} />
            </Head>
            <PostDetail post={props.post} />
        </div>
    );
};

export async function getStaticProps({ params }) {
    try {
        const post = await getPostData(params.slug);

        return {
            props: {
                post,
            },
            revalidate: 600,
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    const postFiles = await getPostFiles();

    const paths = postFiles.map(file => ({
        params: {
            slug: file.replace(/\.md$/, ''),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

export default PostDetailPage;
