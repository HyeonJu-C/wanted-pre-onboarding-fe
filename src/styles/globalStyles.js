import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 :root {
--color-background: rgba(0, 0, 0, 0.05);
--color-border: rgb(211,211,211);
--color-navy:#3c507a;
--color-blue:#007aff;
--color-background-blue:#007bffa1;
--color-red:#dc3546;
--color-background-red:#dc35463a;
--color-green:#27a844;
--color-background-green: #27a8434b;
 }

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
