import React from 'react';

const FormButton = ({title, onclick, className}) => {
  return (
    <div className='inputcategorybutton-div'>
      <button
        className={className}
        onClick={() => console.log('clicked' ,{title})}>{title}</button>
    </div>
  )
}

export default FormButton;
