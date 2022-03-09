import React from 'react'
import { Link } from 'react-router-dom'
import LinkPaths from '../LinkPaths'

const Sidebar = () => {
  return (
    <div>
  
      <nav>
        <Link to='/'> Dashboard </Link>
        <Link to='/past_participants'> Past Participants </Link>
        <Link to='/past_meetings'> Past Meetings </Link>
      </nav>

    </div>


  )
}

export default Sidebar
