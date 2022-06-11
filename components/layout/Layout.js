import { useContext } from 'react';

import NotificationContext from 'context/notification-context';
import Notification from 'components/ui/Notification';
import MainNavigation from 'components/layout/MainNavigation';
import classes from 'styles/layout/Layout.module.scss';

const Layout = props => {
    const notifyCtx = useContext(NotificationContext);
    return (
        <div className={classes.Layout}>
            <MainNavigation />
            <div className={classes.Content}>
                {props.children}
                {notifyCtx.notification && (
                    <Notification
                        title={notifyCtx.notification.title}
                        status={notifyCtx.notification.status}
                        message={notifyCtx.notification.message}
                    />
                )}
            </div>
        </div>
    );
};

export default Layout;
