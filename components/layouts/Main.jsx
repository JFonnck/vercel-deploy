import Head from 'next/head'
import { Navbar } from '../core/Navbar';

import styles from './Layouts.module.css';

export const Main = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}