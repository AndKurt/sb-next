import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { DEVICE } = theme;

export const GlobalStyle = createGlobalStyle`

body {
  font-size: 16px !important;
  height: 100% !important;
  font-family: 'Manrope', 'Open Sans', sans-serif !important;
}

// ---MEDIA QUERIES---
@media ${DEVICE.tablet} {
  html,
  body {
  font-size: 15px;
  }
}

@media ${DEVICE.mobileL} {
  html,
  body {
  font-size: 14px;
  }
}

@media ${DEVICE.mobileM} {
  html,
  body {
  font-size: 13px;
  }
}

@media ${DEVICE.mobileS} {
  html,
  body {
  font-size: 12px;
  }
}
`;
