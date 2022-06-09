import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import routes from 'routes';
import RightChevron from 'assets/svg/chevron-right.svg';
import classes from 'styles/layout/MainNavigation.module.scss';

const MainNavigation = props => {
    const router = useRouter();
    const [minimize, setMinimize] = useState(false);

    const navItems = useMemo(
        () =>
            routes.map(route => {
                return (
                    <li
                        key={route.path}
                        className={[
                            classes.NavItem,
                            router.pathname === route.path
                                ? classes.Active
                                : '',
                        ].join(' ')}>
                        <Link href={route.path}>
                            <a>
                                <span className={classes.Icon}>
                                    {route.icon}
                                </span>
                                <span className={classes.Label}>
                                    {route.label}
                                </span>
                            </a>
                        </Link>
                    </li>
                );
            }),
        [routes, minimize, router]
    );

    function toggleOpenNav() {
        setMinimize(st => !st);
    }

    return (
        <div
            className={[
                classes.MainNavigation,
                minimize ? classes.Minimize : '',
            ].join(' ')}>
            <div className={classes.Brand}>
                <span>Bloggr</span>
                <RightChevron
                    className={classes.Toggle}
                    onClick={toggleOpenNav}
                />
            </div>
            <ul className={classes.NavList}>{navItems}</ul>
        </div>
    );
};

export default MainNavigation;
