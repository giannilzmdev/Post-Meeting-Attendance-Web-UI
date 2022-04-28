import React from 'react'
import Meetings from '../assets/json-data/PastMeetings.json'

const PastMeetings = () => {
  return (
    <div className='PastMeetings'>
      Past Meetings
      {
        Meetings.map( meeting => {
          return(
            <div className="meeting">
              { meeting.dept }
             </div> 
          ) 
        })
      }
    </div>
  )
}

export default PastMeetings
