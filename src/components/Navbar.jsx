import { RiHome2Line, RiQuestionLine, RiSettings2Line } from '@remixicon/react'
import React from 'react'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const location = useLocation()
  const navLink = [
    { name: 'Home', icn: <RiHome2Line/>, path: '/' },
    { name: 'Help', icn: <RiQuestionLine/>, path: '/help' },
    { name: 'Setting', icn: <RiSettings2Line/>, path: '/setting' },
  ]
  return (
    <nav className='w-full fixed bottom-0 left-0'>
      <div className="h-14 w-full flex items-center justify-center gap-x-16 border-t border-border">
        {navLink.map((item, i) => (
          <Link key={i} to={item.path}>
            <div className={`flex flex-col items-center justify-center h-14 ${location.pathname === item.path ? 'border-t-2 border-blue-700 text-blue-700' : ''}`}>
              <span>{item.icn}</span>
              <p className='px-2'>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar