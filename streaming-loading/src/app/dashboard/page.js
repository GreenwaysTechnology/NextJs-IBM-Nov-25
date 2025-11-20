import React, { Suspense } from "react"

const Hello = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 9000, import('./hello'))
    })
})
const Hai = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('./hai'))
    })
})

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function Dashboard() {
    return <div>
        <h1>Header</h1>
        <React.Suspense fallback={<h2>🌀 Welcome Loading...</h2>}>
            <Welcome />
        </React.Suspense>
        <Suspense fallback={<h2>🌀 Hello Loading...</h2>}>
            <Hello />
        </Suspense>
        <Suspense fallback={<h2>🌀 Hai Loading...</h2>}>
            <Hai />
        </Suspense>
        <h2>Footer</h2>
    </div>
}