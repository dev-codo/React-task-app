import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'AAAAAA',
            day: 'Data maneira',
            reminder: true
        },
        {
            id: 2,
            text: 'BBBBBB',
            day: 'Data maneira',
            reminder: true
        },
        {
            id: 3,
            text: 'CCCCC',
            day: 'Data maneira',
            reminder: false
        }
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const toggleReminder = (id) => {
        console.log(id);
        setTasks(
            tasks.map((task) => task.id === id
                ? { ...task, reminder: !task.reminder }
                : task))
    }

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
                : 'Nao ha task para mostrar'
            }
        </div>
    );
}

export default App;
