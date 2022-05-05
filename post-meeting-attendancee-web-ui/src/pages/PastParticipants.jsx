import React from 'react'
import Participants from '../assets/json-data/PastParticipants.json'
const PastParticipants = () => {
  return (
    <div>
      Past Participants
      <br/><br></br>
      {
        // Using && symbol means to check if data exists before mapping so page doesn't break.
        Participants && Participants.map( participant => {
          return(
            <div className="meeting" >
              { participant.next_page_token } <br/>
              { participant.page_count} <br/>
              { participant.page_size} <br/>
              { participant.participants.map(data =>{
                return(
                  <ul>
                    <li> Id: {data.id}</li>
                    <li> Name: {data.name}</li>
                    <li> Email: {data.user_email}</li>

                  </ul>
                )
              
              })}
             

             </div> 
          ) 
        })
      }
    </div>
  )
}

export default PastParticipants
