import './_Card.scss';

interface CardProps {
    title: string;
    time: string;
    setSelectedTimer: (timer: string) => void;
}

export const Card = ({ title, time, setSelectedTimer }: CardProps) => {
    const getTimer = () => {
        setSelectedTimer(time);
    };

    return (
        <li className="card" onClick={getTimer}>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
    );
};
