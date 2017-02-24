import React from 'react';

const FormButton = ({title, className, handleClick}) => {
  return (
    <div className='formbutton-div'>
      <button
        className={className}
        onClick={handleClick}>{title}</button>
    </div>
  )
}

export default FormButton;
