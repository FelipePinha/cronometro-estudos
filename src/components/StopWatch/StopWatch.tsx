import { useState } from 'react';
import './_StopWatch.scss';

interface StopWatchProps {
    selectedTimer: string;
}

export const StopWatch = ({ selectedTimer }: StopWatchProps) => {
    let countDown: number;
    let [hour, min, sec] = selectedTimer.split(':');
    const [hourNumber, setHourNumber] = useState<string>('');
    const [minNumber, setMinNumber] = useState<string>('');
    const [secNumber, setSecNumber] = useState<string>('');

    const watch = () => {
        if (parseInt(sec) > 0) {
            sec = String(parseInt(sec) - 1);
            if (parseInt(sec) < 10) {
                sec = '0' + sec;
            }
            setSecNumber(sec);
        }

        if (parseInt(sec) === 0 && parseInt(min) > 0) {
            min = String(parseInt(min) - 1);
            if (parseInt(min) < 10) {
                min = '0' + min;
            }
            setMinNumber(min);
            sec = '59';
            setSecNumber(sec);
        }

        if (parseInt(min) === 0 && parseInt(hour) > 0) {
            hour = String(parseInt(hour) - 1);

            if (parseInt(hour) < 10) {
                hour = '0' + hour;
            }
            setHourNumber(hour);
            min = '59';
            sec = '59';
            setMinNumber(min);
            setSecNumber(sec);
        }

        if (parseInt(hour) === 0 && parseInt(min) === 0 && parseInt(sec) === 0) {
            clearInterval(countDown);
            setHourNumber('');
            setMinNumber('');
            setSecNumber('');
        }
    };

    const startCounter = () => {
        countDown = setInterval(watch, 1000);
    };

    return (
        <div className="stopwatch">
            <h2>Escolha um card e inicie o cronômetro</h2>
            <div className="stopwatch-container">
                <span id="hour" className="timer-number">
                    {!hour ? '00' : hourNumber ? hourNumber : hour}
                </span>
                <span className="timer-division">:</span>
                <span id="min" className="timer-number">
                    {!min ? '00' : minNumber ? minNumber : min}
                </span>
                <span className="timer-division">:</span>
                <span id="sec" className="timer-number">
                    {!sec ? '00' : secNumber ? secNumber : sec}
                </span>
            </div>
            <button className="start-button" onClick={startCounter}>
                Começar
            </button>
        </div>
    );
};
