import { cookies } from "next/headers"

export async function POST(req) {
    //read user name and password
    const { username, password } = await req.json()
    //lookup whether username and password exits from the db
    if (username === 'admin' && password === '123') {
        //assign token
        const sessionToken = 'user-123'
        //transport this token via cookie
        const cookieStore = await cookies()
        cookieStore.set('session', sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 //1 hour
        })
        return Response.json({ success: true })
    }
    return Response.json({ success: false, message: 'Invalid Credentials' }, { status: 401 })
}