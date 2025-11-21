// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, {
//         cache: 'force-cache'
//     })
//     const data = await response.json()
//     return data

// }

export async function getTime() {
    //const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const url ='http://localhost:8080/api/timezone/Asia/Kolkata'
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data

}
export default async function TimeCachePage() {
    const data = await getTime()
    return <div className="font-bold">
        <h1>Time Now : {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}