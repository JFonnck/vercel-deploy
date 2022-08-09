import Link from "../node_modules/next/link"


import { DarkLayout } from "../components/layouts/DarkLayout"
import { Main } from "../components/layouts/Main"

export default function Contact() {
    return (
        <>
            <h1>Contact Page</h1>
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

Contact.getLayout = function getLayout(page: any) {
    return (
        <Main>
            <DarkLayout>
                {page}
            </DarkLayout>
        </Main>
    )
}