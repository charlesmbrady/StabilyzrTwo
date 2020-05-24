import { createContext } from 'react';

export const FormErrorsContext = createContext({
  // All field names go here
  // This is just for reference, not functional
  // Functional piece is in App.js

  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  agreement: '',
});
