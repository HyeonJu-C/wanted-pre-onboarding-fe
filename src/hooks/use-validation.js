import React, { useCallback } from 'react';

// const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
// const validPassword = new RegExp(
//   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
// );

const useValidation = (props) => {
  const checkValid = useCallback((input, regExp) => {
    if (!input) return null;
    if (input) return regExp.test(input);
  }, []);

  return { checkValid };
};

export default useValidation;
