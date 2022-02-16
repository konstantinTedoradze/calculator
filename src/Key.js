import React from 'react'

const Key = ({keyData: {value,id}, handleInput}) => {
    return (
      <button id={id} onClick={() => handleInput(value)} >
        {value}
     </button>
     )
}

export default Key;