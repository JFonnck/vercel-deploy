
import { FC } from "react"


import { Main } from "../components/layouts/Main"
import Link from "../node_modules/next/link"


export default function About() {
    return (

        <Main>
            <h1>About Page</h1>
            <h1 className={'title'}>
                Redirect to <Link href="/"><a>Home</a></Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </Main>
    )
}

