import Head from 'next/head';

import Hero from 'components/home/Hero';
import FeaturedPosts from 'components/home/FeaturedPosts';
import classes from 'styles/pages/HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={classes.HomePage}>
            <Head>
                <title>Home | Bloggr</title>
            </Head>
            <Hero />
            <FeaturedPosts />
        </div>
    );
}
