import styled from 'styled-components';

interface IProp {
  color: 'secondary' | 'main';
}

export const StyledButton = styled.button<IProp>`
  color: #ccc;
  display: flex;
  border: none;
  cursor: pointer;
  color: ${({ color }) => (color === 'main' ? 'white' : 'black')};
  background: ${({ color }) => (color === 'secondary' ? 'red' : 'black')};
`;
