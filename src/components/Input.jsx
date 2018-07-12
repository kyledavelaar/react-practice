import React from 'react';

const Input = (props) => {
  const { type, value, name, onChange } = props
  return (
    <label>
      {name}
      <input 
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </label>
  )


}

export default Input