import { createRef } from 'react';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import classes from 'styles/components/contact/ContactForm.module.scss';

const ContactForm = props => {
    const firstNameRef = createRef(null);
    const lastNameRef = createRef(null);
    const phoneRef = createRef(null);
    const messageRef = createRef(null);

    function onSubmitMessage(e) {
        e.preventDefault();

        const firstName = firstNameRef.current?.value?.trim();
        const lastName = lastNameRef.current?.value?.trim();
        const phone = phoneRef.current?.value?.trim();
        const message = messageRef.current?.value?.trim();

        if ([firstName, lastName, phone, message].every(x => x !== '')) {
            const fullMessage = {
                firstName,
                lastName,
                phone,
                message,
            };

            console.log(fullMessage);
        }
    }

    return (
        <form className={classes.ContactForm} onSubmit={onSubmitMessage}>
            <div className={classes.FormGroup}>
                <Input
                    label='first name'
                    ref={firstNameRef}
                    placeholder='John'
                />
            </div>
            <div className={classes.FormGroup}>
                <Input
                    label='last name'
                    ref={lastNameRef}
                    placeholder='Smith'
                />
            </div>
            <div className={classes.FormGroup}>
                <Input
                    label='phone'
                    ref={phoneRef}
                    placeholder='555-555-5555'
                />
            </div>
            <div className={classes.FormGroup}>
                <Input
                    type='textarea'
                    label='message'
                    ref={messageRef}
                    placeholder='Enter a message .....'
                />
            </div>
            <div className={classes.FormActions}>
                <Button type='submit'>Submit</Button>
            </div>
        </form>
    );
};

export default ContactForm;
