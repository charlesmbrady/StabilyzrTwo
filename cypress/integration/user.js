/// <reference types="cypress" />
import User from '../helpers/newUser';

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';

describe('User Authentication', function () {
  it('User can register for new account', () => {
    const userOne = new User();
    cy.visit('/');
    cy.get(Nav.REGISTER).click();
    cy.url().should('include', '/register');
    cy.get(Register.FIRST_NAME).type(userOne.firstName);
    cy.get(Register.LAST_NAME).type(userOne.lastName);
    cy.get(Register.EMAIL).type(userOne.email);
    cy.get(Register.PASSWORD).type(userOne.password);
    cy.get(Register.PASSWORD_CONFIRMATION).type(userOne.passwordConfirmation);
    cy.get(Register.SUBMIT).click();
    // cy.url().should('include', '/login');
  });

  it('User can login', () => {
    const userOne = new User();
    cy.visit('/');
    cy.registerNewUser(userOne);
    cy.get(Nav.LOGIN).click();
    cy.url().should('include', '/login');
    cy.get(Login.EMAIL).type(userOne.email);
    cy.get(Login.PASSWORD).type(userOne.password);
    cy.get(Login.SUBMIT).click();
    cy.url().should('include', '/dashboard');
  });

  it('Can logout', () => {
    const userOne = new User();
    cy.visit('/');
    cy.registerNewUser(userOne);
    cy.login(userOne);
    cy.get(Nav.LOGOUT).click();
  });

  // it('Non-authenticated user will be redirect to login from protected route', () => {
  //   cy.visit('/dashboard');
  //   cy.url().should('contain', '/login');
  // });
});

describe('API - Authentication', () => {
  const userThree = new User();
  it('Can create user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/user`, userThree).then(
      (response) => {
        // response.body is automatically serialized into JSON
        expect(response.body).to.have.property(
          'firstName',
          userThree.firstName
        ); // true
      }
    );
  });

  it('Can authenticate user', function () {
    cy.request('POST', `${Cypress.config('apiUrl')}/auth/authenticate`, {
      email: userThree.email,
      password: userThree.password,
    }).then((response) => {
      expect(response.body).to.equal('OK');
    });
  });
});
