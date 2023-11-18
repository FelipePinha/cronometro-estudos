import { Tasks } from '../../App';
import { Card } from '../Card/Card';
import './Task.scss';

interface TaskProps {
    tasks: Tasks[];
    setSelectedTimer: (timer: string) => void;
}

export const Task = ({ tasks, setSelectedTimer }: TaskProps) => {
    return (
        <div className="task">
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(task => (
                    <Card
                        title={task.title}
                        time={task.time}
                        key={task.id}
                        setSelectedTimer={setSelectedTimer}
                    />
                ))}
            </ul>
        </div>
    );
};
