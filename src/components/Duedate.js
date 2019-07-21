import React from 'react'
import morning from './morning.jpg';
import Afternoon from './Afternoon.jpg';
import night from './night.jpg';


function Duedate(props) {
    const date  = new Date()
    const hours = date.getHours()
    let timeOfDay 
    let style 

    let newDate = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate()
   

    if (hours < 12) {
        timeOfDay = "morning"
        style = {backgroundImage: `url(${morning.jpg})`}
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
        style = {backgroundImage: `url(${Afternoon.jpg})`}
    } else {
        timeOfDay = "night"
        style = {backgroundImage: `url(${night.jpg})`}
    }
    return (
        <div style={style}>
            <h2>Good {timeOfDay}! 
                <p className="date">{newDate}: {newMonth}: {newDay}</p>
            </h2>
        </div>
    )
}


export default Duedate

