'use client'

import { createUser } from "@/app/actions/userAction"


export default function UserForm() {

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            //collect data from evt object
            const user = {
                name: evt.target.name.value,
                email: evt.target.email.value
            }
            //invoke server action
            const res = await createUser(user)
            alert(JSON.stringify(res))
        }
        catch (err) {
            console.log(err)
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