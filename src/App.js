import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    // Fetch tasks from Rest api backend, in this case json-server (mock)
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5001/tasks')
        const data = await res.json();

        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5001/tasks/${id}`)
        const data = await res.json();

        return data
    }

    const addTask = async (task) => {
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])

        const res = await fetch('http://localhost:5001/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task)
        })

        const newTask = await res.json();

        setTasks([...tasks, newTask])
    }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5001/tasks/${id}`, {
            method: 'DELETE',
        })

        res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task')
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5001/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        // UI
        setTasks(
            tasks.map((task) => task.id === id
                ? { ...task, reminder: data.reminder }
                : task))
    }

    return (
        <div className="container">
            <Header
                onAddBtn={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
                : 'Nao ha task para mostrar'
            }
        </div>
    );
}

export default App;
