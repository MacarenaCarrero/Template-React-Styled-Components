import { useState } from 'react';
import { StyledButton } from './button.styles';

const Button = ({ color }) => {
  const [color, setColor] = useState(false);
  return (
    <StyledButton color={color} onClick={() => setColor(!color)}></StyledButton>
  );
};

export default Button;
