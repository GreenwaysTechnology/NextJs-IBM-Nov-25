import { Posts } from "./components/Posts"
import React, { Suspense } from "react";

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function PostsPage() {

    return <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Posts (Heading)</h1>
        {/* wrap Posts Component into suspense */}
        <Suspense fallback={<p className="text-blue-600 font-bold">🌀Posts Loading....</p>}>
           		 <Posts />
        </Suspense>
        <Suspense fallback={<p className="text-blue-600 font-bold">🌀Welcome Loading....</p>}>
            <Welcome />
        </Suspense>
        <h2>
            Footer
        </h2>
    </div>

}
