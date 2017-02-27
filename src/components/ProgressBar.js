import React from 'react'

const ProgressBar = ({ width, height, physicalNum, emotionalNum, mentalNum, spiritualNum, total }) => {
  const physicalWidth = width * (physicalNum / total);
  const emotionalWidth = width * (emotionalNum / total);
  const mentalWidth = width * (mentalNum / total);
  const spiritualWidth = width * (spiritualNum / total);


  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#DC1020" x={0} y={0} width={physicalWidth} height={height} />
        <rect fill="#DCA010" x={physicalWidth} y={0} width={emotionalWidth} height={height} />
        <rect fill="#D9DC10" x={emotionalWidth + physicalWidth} y={0} width={mentalWidth} height={height} />
        <rect fill="#bada55" x={mentalWidth + emotionalWidth + physicalWidth} y={0} width={spiritualWidth} height={height} />
      </g>
    </svg>
  );
}

export default ProgressBar;
