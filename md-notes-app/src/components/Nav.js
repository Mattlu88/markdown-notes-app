import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <div className="nav-btns">
      <div>
        <button className="btn">Notes</button>
      </div>
      <div>
        <button className="btn">TO-dos</button>
      </div>
    </div>
  )
}

export default Nav;