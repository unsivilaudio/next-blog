import Head from 'next/head';

import { NotificationProvider } from 'context/notification-context';
import Layout from 'components/layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <NotificationProvider>
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
        </NotificationProvider>
    );
}

export default MyApp;
