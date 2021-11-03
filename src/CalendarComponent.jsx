import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx'
import WelcomeHeader from './WelcomeHeader.jsx';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

export default function CalendarComponent() {
    const [events, setEvents] = useState([]);
    const handleEvents = (arr) => {
        setEvents(prev => [...prev,...arr])
    }
    const names = ['Mike', 'Shamilah', 'Laura', 'Esma', 'Bob'];
    const populateEvents = (names) => {
        let eventsArr = []
        for(let i = 0; i < names.length; i ++){
            for(let j = 0; j < names.length; j++){
                eventsArr.push({
                    start: moment()
                        .add(i,'weeks')
                        .toDate(),
                    end: moment()
                        .add(i,'weeks')
                        .toDate(),
                    title: `Reach out to ${names[j]}`
                })
            }
        }
        eventsArr.push({
            start: moment()
                .add(2, 'days')
                .toDate(),
            end: moment()
                .add(2, 'days')
                .toDate(),
            title: `Thanks @Luke Cho`
        })
        return eventsArr;
    }
    const recruiters = ['Shefik', 'Shantanu', 'Brian Kim', 'Ryan'];
    const populateRecruiters = (arr) => {
        let eventsArr = []
        for(let i = 0; i < names.length; i ++){
            for(let j = 0; j < names.length; j++){
                eventsArr.push({
                    start: moment()
                        .add(-1,'days')
                        .add(i,'weeks')
                        .toDate(),
                    end: moment()
                        .add(-1,'days')
                        .add(i,'weeks')
                        .toDate(),
                    title: `Reach out to ${names[j]}`
                })
            }
        }
        return eventsArr;
    }
    useEffect(() => {
        handleEvents(populateEvents(recruiters))
        handleEvents(populateRecruiters(names));
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <WelcomeHeader></WelcomeHeader>
            <div>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "130vh" , width: "170vh"}}
            />
            </div>
        </div>
    )
}
