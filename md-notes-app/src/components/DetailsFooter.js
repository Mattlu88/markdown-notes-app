import React, { useState } from 'react'
import Confirmation from './Confirmation'

const DetailsFooter = (props) => {
  const { confirmDelete } = props;
  const [ openDialog, setOpenDialog ] = useState(false)

  const handleClickDelete = () => {
    setOpenDialog(true);
  }

  return (
    <footer className="footer-btns">
      <div>
        <button>Share</button>
      </div>
      <div>
        <button>Favourite</button>
      </div>
      <div>
        <button onClick={handleClickDelete}>Delete</button>
      </div> 
      <Confirmation 
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        confirmDelete={confirmDelete}
      />
      <div>
        <button>Print</button>
      </div>
    </footer>
  )
}

export default DetailsFooter