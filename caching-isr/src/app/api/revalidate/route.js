import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

//path
// export async function GET(request, { params }) {
//     const path = request.nextUrl.searchParams.get("path") || '/timecache/Kolkata'
//     revalidatePath(path)
//     return NextResponse.json({ revalidate: true, now: new Date(), cache: 'no-store' })
// }

export async function GET(request, { params }) {
    const tag = request.nextUrl.searchParams.get("timerTag") || 'timerTag'
    revalidateTag(tag)
    return NextResponse.json({ revalidate: true, now: new Date(), cache: 'no-store' })
}