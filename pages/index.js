import Head from 'next/head';

import Hero from 'components/home/Hero';
import FeaturedPosts from 'components/home/FeaturedPosts';
import classes from 'styles/pages/HomePage.module.scss';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is the React framework for production -- it makes building fullstack React and sites a breeze and ships with built-in SSR.',
        date: new Date(),
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is the React framework for production -- it makes building fullstack React and sites a breeze and ships with built-in SSR.',
        date: new Date(),
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is the React framework for production -- it makes building fullstack React and sites a breeze and ships with built-in SSR.',
        date: new Date(),
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With NextJS',
        image: 'getting-started-nextjs.png',
        excerpt:
            'NextJS is the React framework for production -- it makes building fullstack React and sites a breeze and ships with built-in SSR.',
        date: new Date(),
    },
];

export default function HomePage() {
    return (
        <div className={classes.HomePage}>
            <Head>
                <title>Home | Bloggr</title>
            </Head>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </div>
    );
}
