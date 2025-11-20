import React from "react"


const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function Dashboard() {
    return <div>
        <h1>Header</h1>
        <Welcome/>
    </div>
}