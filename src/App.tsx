import { useState } from 'react';
import { NewTask } from './components/NewTask/NewTask';
import { StopWatch } from './components/StopWatch/StopWatch';
import { Task } from './components/Task/Task';
import './styles/app.scss';

export interface Tasks {
    title: string;
    time: string;
    id: number;
}

function App() {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [selectedTimer, setSelectedTimer] = useState<string>('');

    return (
        <div className="container">
            <NewTask setTasks={setTasks} tasks={tasks} />
            <StopWatch selectedTimer={selectedTimer} />
            <Task tasks={tasks} setSelectedTimer={setSelectedTimer} />
        </div>
    );
}

export default App;
