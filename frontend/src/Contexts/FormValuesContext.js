import { createContext } from 'react';

export const FormValuesContext = createContext({
  // All field names go here
  // This is just for reference, not functional
  // Functional piece is in App.js

  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordConfirmation: null,
  agreement: null,
});
