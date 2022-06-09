import NewsPaperIcon from 'assets/svg/newspaper-solid.svg';
import AtIcon from 'assets/svg/at-solid.svg';
import HomeIcon from 'assets/svg/home-solid.svg';

export default [
    {
        path: '/',
        label: 'home',
        icon: <HomeIcon />,
    },
    {
        path: '/posts',
        label: 'posts',
        icon: <NewsPaperIcon />,
    },
    {
        path: '/contact',
        label: 'contact',
        icon: <AtIcon />,
    },
];
