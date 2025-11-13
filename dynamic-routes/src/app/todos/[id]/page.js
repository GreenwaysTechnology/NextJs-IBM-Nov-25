import todos from "@/app/mock-data/todos"

export async function fetchTodoById(id) {
    const todo = todos.find(todo => todo.id === id)
    return todo
}

export default async function TodosDetailsPage(props) {
    // console.log(props.params)
    // props.params.then(va=>console.log(va.id))
    const id = (await props.params).id
    const todo = await fetchTodoById(+id)
    return <div>
        <h1>Id : {id}</h1>
        <h2>{todo.title}</h2>
        <h3>{todo.completed ? "Done" : "In Progress"}</h3>
    </div>
}