import React from 'react';

const FormButton = ({title, className, onClick}) => {
  return (
    <div className='formbutton-div'>
      <button
        className={className}
        onClick={onClick}>{title}</button>
    </div>
  )
}

export default FormButton;
