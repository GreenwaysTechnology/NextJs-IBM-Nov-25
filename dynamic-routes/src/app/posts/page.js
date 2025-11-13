import Link from "next/link";

export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

export default async function PostsMasterPage() {
    const posts = await fetchPosts()
    return <div>
        <h1>Posts-Details</h1>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <Link href={{ pathname: `/posts/${post.id}` }}>{post.title}</Link>
                </li>
            })}
        </ul>
    </div>
}