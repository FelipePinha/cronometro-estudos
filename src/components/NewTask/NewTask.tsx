import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasks } from '../../App';
import './_NewTask.scss';

interface NewTaskProps {
    tasks: Tasks[];
    setTasks: (data: Tasks[]) => void;
}

export const NewTask = ({ setTasks, tasks }: NewTaskProps) => {
    const [title, setTitle] = useState<string>('');
    const [time, setTime] = useState<string>('00:00:00');

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };

    const handleSaveNewTask = (e: FormEvent) => {
        e.preventDefault();

        if (!title || !time) {
            return;
        }

        const allTasks = [...tasks];
        allTasks?.push({
            title,
            time,
            id: allTasks.length + 1,
        });
        setTasks(allTasks);

        setTitle('');
        setTime('00:00:00');
    };

    return (
        <form className="new-task" onSubmit={handleSaveNewTask}>
            <div className="form-inputs-container">
                <div className="form-control">
                    <label htmlFor="task-title">Tarefa</label>
                    <input
                        onChange={handleChangeTitle}
                        value={title}
                        type="text"
                        name="task-title"
                        placeholder="O que você deseja estudar"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="task-timer">Tempo</label>
                    <input
                        onChange={handleChangeTime}
                        type="time"
                        min="00:00:00"
                        value={time}
                        step="1"
                        name="task-timer"
                        placeholder="O que você deseja estudar"
                    />
                </div>
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
};
