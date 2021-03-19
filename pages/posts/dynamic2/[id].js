import Container from '../../../components/container'

import { getAllPostIds, getPostData } from '../../../libs/posts'

export default function Post({ postData }) {
    return (
        <Container>
            {postData.id}
            <br />
            {postData.title}
            <br />
            {postData.date}
        </Container>
    )
}
// tell next.js to pre-generate which pages through paths
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}