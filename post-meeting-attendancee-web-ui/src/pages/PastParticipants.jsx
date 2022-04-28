import React from 'react'
import Participants from '../assets/json-data/PastParticipants.json'
const PastParticipants = () => {
  return (
    <div>
      Past Participants
      {
        Participants.map( participant => {
          return(
            <div className="meeting">
              { participant.next_page_token }
             </div> 
          ) 
        })
      }
    </div>
  )
}

export default PastParticipants
