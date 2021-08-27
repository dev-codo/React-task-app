import Task from "./Task"


const Tasks = ({ tasks, task }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks
