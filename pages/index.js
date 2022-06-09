import Head from 'next/head';

import { getFeaturedPosts } from 'lib/posts-util';
import Hero from 'components/home/Hero';
import FeaturedPosts from 'components/home/FeaturedPosts';
import classes from 'styles/pages/HomePage.module.scss';

export default function HomePage(props) {
    return (
        <div className={classes.HomePage}>
            <Head>
                <title>Home | Bloggr</title>
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getFeaturedPosts();

    return {
        props: {
            posts,
        },
    };
}
