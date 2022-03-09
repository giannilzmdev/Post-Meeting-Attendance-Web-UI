import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import PastParticipants from '../pages/PastParticipants'
import PastMeetings from '../pages/PastMeetings'


const LinkPaths = () => {
  return (
    <div>
      <nav>
        <Link to ='/'> Dashboard </Link>
        <Link to ='/past_participants'> Past Participants </Link>
        <Link to ='/past_meetings'> Past Meetings </Link>
      </nav>
     <Routes>

        <Route path='/' element={ <Dashboard />}/>
        <Route path='/past_participants' element={ <PastParticipants />}/>
        <Route path='/past_meetings' element={ <PastMeetings />}/>

      </Routes>
      </div>
   
  ) 
}

export default LinkPaths
