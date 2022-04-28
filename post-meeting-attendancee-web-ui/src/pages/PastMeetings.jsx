import React from 'react'
import Meetings from '../assets/json-data/PastMeetings.json'

const PastMeetings = () => {
  return (
    <div className='PastMeetings'>
      Past Meetings
      <br/>
      <br/>
      {
        // Using && symbol means to check if data exists before mapping so page doesn't break.
        Meetings && Meetings.map( meeting => {
          return(
            <div className="meeting">
              { meeting.dept } <br/>
              { meeting.duration } <br/>
              { meeting.end_time } <br/>
              { meeting.host_id } <br/>
              { meeting.id } <br/>
              { meeting.participants_count } <br/>
              { meeting.source} <br/>
              { meeting.start_time} <br/>
              { meeting.topic} <br/>
              { meeting.total_minutes} <br/>
              { meeting.type} <br/>
              {meeting.user_email} <br/>

             </div> 
          ) 
        })
      }
    </div>
  )
}

export default PastMeetings
