import React from 'react';
import './Confirmation.css';

const DelConfBtns = (props) => {
  const { closeConfDialog, confirmDelete } = props;

  const handleClickDelete = () => {
    confirmDelete();
    closeConfDialog();
  }

  return (
    <div>
      <button id="conf-cancel-btn" onClick={closeConfDialog}>
        CANCEL
      </button>
      <button id="conf-del-btn" onClick={handleClickDelete}>
        DELETE
      </button>
    </div>
  )
}

const Confirmation = (props) => {
  const { openDialog, setOpenDialog, confirmDelete } = props;
  if (openDialog) {
    return (
      <div className="modal conf-modal-div">
        <div className="confirmation">
          <div>
            <p>
              Delete this note?
            </p>
            <div className="confirmation-btns">
              <DelConfBtns 
                closeConfDialog={() => setOpenDialog(false)}
                confirmDelete={confirmDelete}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } 
  return <div></div>
}

export default Confirmation;