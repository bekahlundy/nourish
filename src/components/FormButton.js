import React from 'react';

const FormButton = ({title, className}) => {
  return (
    <div className='formbutton-div'>
      <button
        className={className}
        onClick={() => console.log('clicked' ,{title})}>{title}</button>
    </div>
  )
}

export default FormButton;
