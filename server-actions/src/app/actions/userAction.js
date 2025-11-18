'use server'

// export async function createUser() {

import { redirect } from "next/navigation"

//     return {
//         success: true, message: 'Data Saved Successfully'
//     }
// }

//getting data from the client component
// export async function createUser(data) {
//     console.log('data', data)
//     redirect("/success")
// }

// export async function createUser(data) {
//     console.log('data', data)
//     console.log('name',data.get('name'),'email',data.get('email'))
//    redirect("/success")
// }

export async function createUser(data) {
    console.log('data', data)
    console.log('name', data.get('name'), 'email', data.get('email'))
    // redirect("/success")
    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);

}