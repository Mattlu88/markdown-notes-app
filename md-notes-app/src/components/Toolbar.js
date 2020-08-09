import React from 'react'
import './Toolbar.css'

const Toolbar = (props) => {
  const {
    editable,
    handleClickBack,
    handleClickSave,
    handleClickCancel,
    handleClickEdit,
   } = props

  return (
    <div id="toolbar">
      <div>
        { !editable &&
          <button onClick={handleClickBack}>Back</button>
        }
      </div>
      <div>
        { !editable && 
          <button onClick={handleClickEdit}>Edit</button> }
        { editable && 
          <button onClick={handleClickSave}>Save</button> }
        { editable && 
          <button onClick={handleClickCancel}>Cancel</button> }
      </div>
    </div> 
  )
}

export default Toolbar