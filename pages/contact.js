import ContactForm from 'components/contact/ContactForm';
import classes from 'styles/pages/ContactPage.module.scss';

const ContactPage = props => {
    return (
        <div className={classes.ContactPage}>
            <div className={classes.Header}>Get in touch with us!</div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
