import MainNavigation from 'components/layout/MainNavigation';
import classes from 'styles/layout/Layout.module.scss';

const Layout = props => {
    return (
        <div className={classes.Layout}>
            <MainNavigation />
            <div className={classes.Content}>{props.children}</div>
        </div>
    );
};

export default Layout;
