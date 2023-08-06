import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className="navbar bg-base-300 relative">
      <button className="btn btn-ghost normal-case text-xl">Your Weather</button>
      <Search/>
    </div>
  )
}

export default Header


