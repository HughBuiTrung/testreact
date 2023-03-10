import React from 'react'

function Button(props) {
  return (
    <div>
      <button type="button" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button