import { FC } from 'react';
import { ActiveLink } from '../utils/ActiveLink';
import styles from './Core.module.css';

const menu = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' },
    { path: '/pricing', title: 'Pricing' },
];

export const Navbar: FC = () => {
    return (
        <div className={styles['nav-container']}>
            {menu.map((menuItem, index) => (
                <ActiveLink key={index} url={menuItem.path} text={menuItem.title} />
            ))
            }
        </div>
    )
}
