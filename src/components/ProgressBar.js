import React from 'react'

const ProgressBar = ({ width, height, physicalNum, emotionalNum, mentalNum, spiritualNum, total }) => {
  const physicalWidth = width * (physicalNum / total);
  const emotionalWidth = width * (emotionalNum / total);
  const mentalWidth = width * (mentalNum / total);
  const spiritualWidth = width * (spiritualNum / total);


  return (
    <div className='footer'>
      <div className='progressbar-container'>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect fill="#90C2E7" x={0} y={0} width={physicalWidth} height={height} />
            <rect fill="#EEABC4" x={physicalWidth} y={0} width={emotionalWidth} height={height} />
            <rect fill="#94DDBC" x={emotionalWidth + physicalWidth} y={0} width={mentalWidth} height={height} />
            <rect fill="#F3DE8A" x={mentalWidth + emotionalWidth + physicalWidth} y={0} width={spiritualWidth} height={height} />
          </g>
        </svg>
    </div>
</div>
  );
}

export default ProgressBar;
