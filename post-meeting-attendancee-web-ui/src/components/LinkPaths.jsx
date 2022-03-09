// This is your Routes path. I did not name it "Routes" since we are using React-Router-Dom v6+ and Routes is now a built-in component. Routes replaces "Switch" from React-Router-Dom v5.

import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import PastParticipants from '../pages/PastParticipants'
import PastMeetings from '../pages/PastMeetings'


const LinkPaths = () => {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={ <Dashboard />}/>
        <Route path='/past_participants' element={ <PastParticipants />}/>
        <Route path='/past_meetings' element={ <PastMeetings />}/>
      </Routes>

    </div>
   
  ) 
}

export default LinkPaths
