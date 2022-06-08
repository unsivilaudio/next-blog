import Head from 'next/head';

import Layout from 'components/layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>NextJs | Bloggr</title>
                <meta
                    name='description'
                    content='A Simple Blog Application built on Next.js'
                />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
