import styled from 'styled-components';

import theme from '../../../theme';
import { setParagraphFontSize, setRadius } from '../../../utils';

const { COLOR, TRANSITION } = theme;

export const StyledInput = styled.input`
  background-color: ${COLOR.HELPER_BLUE_3};
  border: none;
  border-radius: ${setRadius('S')};
  box-sizing: border-box;
  outline: none;
  padding: 15px 25px;
  transition: ${TRANSITION.FAST};
  ${setParagraphFontSize('bold_3')}
  width: 100%;

  ::placeholder {
    color: ${COLOR.BLACK};
  }
`;

export const StyledForm = styled.form`
  background-color: ${COLOR.HELPER_BLUE_3};
  border-radius: ${setRadius('S')};
  display: flex;
  position: relative;
  transition: ${TRANSITION.FAST};
  width: 445px;

  :hover {
    background-color: #eceff2;

    ${StyledInput} {
      background-color: #eceff2;
      color: ${COLOR.BLACK};

      ::placeholder {
        color: ${COLOR.GREY};
      }
    }
  }

  :focus {
    ${StyledInput} {
      color: ${COLOR.BLACK};

      ::placeholder {
        color: ${COLOR.GREY};
      }
    }
  }
`;
