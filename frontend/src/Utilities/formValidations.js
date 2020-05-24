export default function validateForm(values) {
  let errors = {};

  // Email
  if (!values.email) {
    errors.email = 'Email Address is required';
  }

  // First Name
  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = 'First Name must be at least 2 characters';
  }
  if (values.firstName && values.firstName.length > 100) {
    errors.firstName = 'First Name must be less than 100 characters';
  }

  // Last Name
  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = 'First Name must be at least 2 characters';
  }
  if (values.firstName && values.firstName.length > 100) {
    errors.firstName = 'First Name must be less than 100 characters';
  }

  // Password
  if (!values.password) {
    errors.password = 'Password is required';
  }
  if (values.password && values.password.length < 7) {
    errors.password = 'Password must be at least 7 characters';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password Confirmation is required';
  }

  if (
    values.password &&
    values.passwordConfirmation &&
    values.password != values.passwordConfirmation
  ) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  // Agreement to Terms of Use and Privacy Policy
  if (!values.agreement) {
    errors.agreement = 'You must agree to the Terms of Use and Privacy Policy';
  }
  return errors;
}
