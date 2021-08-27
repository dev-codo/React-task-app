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

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} />
        </div>
    );
}

export default App;
