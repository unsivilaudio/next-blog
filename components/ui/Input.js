import { forwardRef } from 'react';
import classes from 'styles/components/ui/Input.module.scss';

const Input = forwardRef(
    ({ type, onChange, value, placeholder, name, label }, ref) => {
        const customInput =
            type === 'textarea' ? (
                <textarea
                    ref={ref}
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    ref={ref}
                    name={name}
                    type={type || 'text'}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            );

        return (
            <div className={classes.Input}>
                {label && <label htmlFor={name}>{label}</label>}
                {customInput}
            </div>
        );
    }
);

export default Input;
