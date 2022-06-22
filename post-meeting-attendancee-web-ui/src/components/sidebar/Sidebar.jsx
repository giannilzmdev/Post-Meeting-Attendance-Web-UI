import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/json-data/SidebarRoutes.json'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={logo} alt='company logo'/>
      </div>
      {
        sidebar_items.map((item, index)=> (
          <Link to={item.route} key={index}>
            <div>
              {item.display_name}
            </div>
          </Link>
        ))
      }
  


    </div>


  )
}

export default Sidebar

// Icons for css from https://boxicons.com/
{/* <nav>
<Link to='/'> Dashboard </Link>
<Link to='/past_participants'> Past Participants </Link>
<Link to='/past_meetings'> Past Meetings </Link>
</nav> */}