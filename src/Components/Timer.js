import React, {useState, useEffect} from 'react';
import { Container, Title, TimerCircle, Count, Start, Stop, Save, Reset } from './TimerStyle';
import { Contain } from '../styles';
import { AddCategory } from './AddCategory/AddCategory';

export const Timer = () => {

    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
            setResume("Resume")
        }else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timeOn])

    const [resume, setResume] = useState("Start")

    // timer save

    const [save, setSave] = useState(false)

    const toggleSave = () => {
        if (save === false || save === true) {
            setSave(!save)
        }
    }

    return (
        <Contain>
        <title>
            {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </title>
        <Container>
            <Title>ReadBook</Title>
            <TimerCircle>
                <Count>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</Count>
                <Count>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Count>
                <Count>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</Count>
            </TimerCircle>
            <Start className="button" timeOn={timeOn} onClick={() => setTimeOn(true)}>{resume}</Start>
            <Stop className="button2" timeOn={timeOn} onClick={() => setTimeOn(false)}>Stop</Stop>
            <Save onClick={toggleSave} className="button3">Save</Save>
            <Reset onClick={() => {setTime(0); setResume("Start"); setTimeOn(false)}}>Restart</Reset>
        </Container>
        <AddCategory toggleSave={toggleSave} save={save} time={time}/>
        </ Contain>
    )
}
