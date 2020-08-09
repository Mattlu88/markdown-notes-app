import React from 'react';
import './Footer.css';

const ListFooter = (props) => {
  return (
    <footer className="footer-btns">
      <div>
        <button className="btn">Notes</button>
      </div>
      <div>
        <button className="btn">TO-dos</button>
      </div>
    </footer>
  )
}

export default ListFooter;