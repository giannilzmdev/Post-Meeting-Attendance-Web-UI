import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import LinkPaths from '../LinkPaths'
import { BrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>

       <LinkPaths/>
       
    </BrowserRouter>
  )
}

export default Layout
