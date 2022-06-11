import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: ({ status, message, title }) => {},
    hideNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
    const [activeNotification, setActiveNotification] = useState(null);

    useEffect(() => {
        if (
            activeNotification &&
            (activeNotification?.status === 'success' ||
                activeNotification?.status === 'error')
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]);

    function showNotification(data) {
        setActiveNotification(data);
    }

    function hideNotification() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification,
        hideNotification,
    };

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
