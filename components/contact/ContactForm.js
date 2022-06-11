import { createRef, useContext } from 'react';
import NotificationContext from 'context/notification-context';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import classes from 'styles/components/contact/ContactForm.module.scss';

const ContactForm = props => {
    const notifyCtx = useContext(NotificationContext);
    const firstNameRef = createRef(null);
    const lastNameRef = createRef(null);
    const phoneRef = createRef(null);
    const emailRef = createRef(null);
    const messageRef = createRef(null);

    function onSubmitMessage(e) {
        e.preventDefault();

        const firstName = firstNameRef.current?.value?.trim();
        const lastName = lastNameRef.current?.value?.trim();
        const phone = phoneRef.current?.value?.trim();
        const email = emailRef.current?.value?.trim();
        const message = messageRef.current?.value?.trim();

        if ([firstName, lastName, email, phone, message].every(x => x !== '')) {
            const fullMessage = {
                firstName,
                lastName,
                phone,
                email,
                message,
            };

            console.log(fullMessage);
            notifyCtx.showNotification({
                status: 'pending',
                message: 'Sending Message...',
                title: 'POST',
            });
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fullMessage),
            })
                .then(async res => {
                    const data = await res.json();
                    if (!res.ok) {
                        throw new Error(res.error);
                    }

                    return data;
                })
                .then(data => {
                    console.log(data);

                    notifyCtx.showNotification({
                        status: 'success',
                        message: data.message,
                        title: 'Success',
                    });
                })
                .catch(err => {
                    console.log(err.message);

                    notifyCtx.showNotification({
                        status: 'error',
                        message: data.message,
                        title: 'Error',
                    });
                });
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
                    label='email'
                    ref={emailRef}
                    placeholder='jsmith@mail.com'
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
                <Button theme='invert' type='submit'>
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
