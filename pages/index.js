import Link from 'next/link'
import Head from 'next/head'

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Welcome to Next.js!</title>
            </Head>
            <div>Welcome to Next.js!</div>
            <Link href="/posts/first">
                <a>First Post</a>
            </Link>
        </>	    
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: { stars: json.stargazers_count }
    }
}

export default HomePage