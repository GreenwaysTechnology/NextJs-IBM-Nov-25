
export async function fetchPostById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await response.json()
}

export default async function PostsDetailsPage(props) {
    const id = (await props.params).id
    const post = await fetchPostById(+id)
    return <div>
        <h1>UserId : {post.userId} Id : {post.id}</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
}