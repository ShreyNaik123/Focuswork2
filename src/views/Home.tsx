import React from 'react'
import { useTimer } from 'react-timer-hook'
import FlipNumbers from 'react-flip-numbers'

function MyTimer({ expiryTimestamp }) {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn('onExpire called'),
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>react-timer-hook </h1>
            <p>Timer Demo</p>
            <div style={{ fontSize: '100px' }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button
                onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date()
                    time.setSeconds(time.getSeconds() + 300)
                    restart(time)
                }}
            >
                Restart
            </button>
        </div>
    )
}

export default function Home() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        time,
        onExpire: () => console.warn('onExpire called'),
    })

    return (
        // <div>
        //     <MyTimer expiryTimestamp={time} />
        // <FlipNumbers
        //     play
        //     height={48}
        //     width={48}
        //     color="red"
        //     background="white"
        //     perspective={100}
        //     numbers="12345"
        // />
        //     ;
        // </div>

        <div className="w-full h-full">
            <FlipNumbers
                play
                height={20}
                width={20}
                color="red"
                background="white"
                perspective={100}
                numbers={`${hours}${minutes}${seconds}`}
            />
            <h1>react-timer-hook </h1>
            <p>Timer Demo</p>
            <div style={{ fontSize: '100px' }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button
                onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date()
                    time.setSeconds(time.getSeconds() + 300)
                    restart(time)
                }}
            >
                Restart
            </button>
        </div>
    )
}
