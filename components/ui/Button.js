import Link from 'next/link';

import classes from 'styles/components/ui/Button.module.scss';

const Button = ({
    type = 'button',
    theme = 'primary',
    onClick,
    link,
    disabled,
    children,
}) => {
    const btnClasses = [classes.Button];

    switch (theme) {
        case 'primary':
            btnClasses.push(classes.Primary);
            break;
        case 'success':
            btnClasses.push(classes.Success);
            break;
        case 'danger':
            btnClasses.push(classes.danger);
            break;
        case 'invert':
            btnClasses.push(classes.Invert);
            break;
    }

    if (link) {
        return (
            <Link href={link} legacyBehavior>
                <a className={btnClasses.join(' ')}></a>
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={btnClasses.join(' ')}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
