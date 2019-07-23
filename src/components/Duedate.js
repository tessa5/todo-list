import React from 'react'

function Duedate(props) {
    const date  = new Date()
    const hours = date.getHours()
    let timeOfDay 

    let newDate = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate()
   

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            
            <h2>Good {timeOfDay}! 
                <p className="date">{newDate}: {newMonth}: {newDay}</p>
            </h2>
        </div>
    )
}


export default Duedate

