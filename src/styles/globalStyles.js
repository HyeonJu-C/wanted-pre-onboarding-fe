import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 a {
  color: inherit; 
    text-decoration: none;
}

button {
  background-color: transparent;
}

 button:hover {
  cursor: pointer;
 }

 .sr-only {
  position: absolute;
  z-index: -100;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
 }
`;

export default GlobalStyles;
