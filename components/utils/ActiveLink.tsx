


import { FC } from 'react';
import Link from '../../node_modules/next/link';
import { useRouter } from '../../node_modules/next/router';


import styles from './Utils.module.css';

interface IActiveLink {
    url: string
    text: string
}

export const ActiveLink: FC<IActiveLink> = ({ url, text }) => {

    const { asPath } = useRouter();

    return (
        <Link href={url}>
            <a className={asPath === url ? (styles['active-link']) : undefined}>{text}</a>
        </Link>
    )
}
