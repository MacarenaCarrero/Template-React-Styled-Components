import styled from 'styled-components';

const StyledSquare = styled.square`
  background-color: ${({ color }) => (color ? 'red' : 'pink')};
  width: 200px;
  height: 200px;
`;

export { StyledSquare };
