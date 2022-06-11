import ContactForm from 'components/contact/ContactForm';
import Head from 'next/head';
import classes from 'styles/pages/ContactPage.module.scss';

const ContactPage = props => {
    return (
        <div className={classes.ContactPage}>
            <Head>
                <title>Contact Me | Bloggr</title>
                <meta name='description' content='Get in touch with me.' />
            </Head>
            <div className={classes.Header}>Get in touch with us!</div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
