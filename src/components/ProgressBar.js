import React from 'react'

const ProgressBar = () => {
  return (
    <div className='progressbar-container'>
      <svg width="90%" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect fill="#D0011B" x="0" y="0" width="300" height="40" />
    <rect fill="#50E3C2" x="300" y="0" width="300" height="40" />
  </g>
</svg>
    </div>
  )
}

export default ProgressBar;