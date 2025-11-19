export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}

export async function generateStaticParams() {
    const todos = await fetchTodos()
    //must return an array of todos
    return todos.map(todo => {
        const id = todo.id.toString()
        //here id: is going to become file name of the page like 1.html,2.html,3.html etc..
        return {
            id: id
        }
    })
}

