import { useState } from 'react';
import { StyledSquare } from './square.styles';

const Square = color => {
  const [isActive, isInactive] = useState(isInactive);
  return (
    <StyledSquare color={color} onClick={() => isActive(!color)}></StyledSquare>
  );
};

export default Square;
