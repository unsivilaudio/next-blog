import { useContext } from 'react';

import NotificationContext from 'context/notification-context';
import classes from 'styles/components/ui/Notification.module.scss';

const Notification = ({ title, message, status }) => {
    const notifyCtx = useContext(NotificationContext);
    const notifyClasses = [classes.Notification];

    switch (status) {
        case 'success':
            notifyClasses.push(classes.Success);
            break;
        case 'pending':
            notifyClasses.push(classes.Pending);
            break;
        case 'error':
            notifyClasses.push(classes.Error);
            break;
    }

    return (
        <div className={notifyClasses.join(' ')}>
            <p>{title}</p>
            <p>{message}</p>
            <span onClick={notifyCtx.hideNotification}>X</span>
        </div>
    );
};

export default Notification;
