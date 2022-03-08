import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import LinkPaths from '../LinkPaths'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

const Layout = () => {
  return (
    <Router>
       <nav>
        <Link to ='/'> Dashboard </Link>
        <Link to ='/past_participants'> Past Participants </Link>
        <Link to ='/past_meetings'> Past Meetings </Link>
      </nav>
      <div>
        className='layout' element={ <Sidebar />}
      </div>
      {/* <Route render={(props) => (
        <div className='layout'>
          <Sidebar {...props}/>
          <div className='layout_content'>
            <div className='layout_content-main'>
              <LinkPaths/>
            </div>
          </div>
        </div>
      )}/> */}
    </Router>
  )
}

export default Layout
