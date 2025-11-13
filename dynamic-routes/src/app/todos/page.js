import todos from "@/app/mock-data/todos"
import Link from "next/link";

export async function fetchTodos() {
    return todos // Promise.resolve(todos)
}

export default async function TodosMasterPage() {
    const todos = await fetchTodos()
    return <div>
        <h1>TodoList</h1>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    <Link href={{ pathname: `/todos/${todo.id}` }}>{todo.title}</Link>
                </li>
            })}
        </ul>
    </div>
}