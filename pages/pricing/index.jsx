import Link from 'next/link'

import { Main } from "../../components/layouts/Main"


export default function Pricing() {
    return (
        <>
            <h1>Pricing Page</h1>
            <h1 className={'title'}>
                Redirect to <Link href="/"><a>Home</a></Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </>
    )
}

Pricing.getLayout = function (page) {
    return (
        <Main>
            {page}
        </Main>
    )
}
