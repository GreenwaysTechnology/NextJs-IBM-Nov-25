'use client'

import { createUser } from "@/app/actions/userAction"


export default function UserForm() {

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            //invoke server action
            const res= await createUser()
            alert(JSON.stringify(res))
        }
        catch (err) {

        }
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
            <button type="submit">Create User</button>
        </div>
    </form>

}