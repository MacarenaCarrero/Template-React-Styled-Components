import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.color};
  width: 150px;
  height: 50px;
  font-size: ${({ color }) => (color ? 'blue' : 'pink')};
`;

export { StyledButton };
