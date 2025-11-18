import { notFound } from "next/navigation"

//object which stores page spefic content
const docs = {
    "getting-started": "Heres How to get Started",
    "advanced": "This is avanced guide",
    "nextjs" : "This is next js content"
}

export default async function DocsDetailsPage({ params }) {
    const slug = (await params).slug
    console.log(slug)
    //construct path
    const path = slug.join("/")
    console.log(path)
    //extract content from the path 
    const content = docs[path]
    console.log(content)
    if (!content) {
        notFound()
    }
    return <div className="p-6">
        <h1>Docs : {path}</h1>
        <p>{content}</p>
    </div>
}
