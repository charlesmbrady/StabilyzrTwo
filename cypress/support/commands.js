// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import Home from '../elements/home';
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add('registerNewUser', (user) => {
  cy.visit('/');
  cy.get(Nav.REGISTER).click();
  cy.get(Register.FIRST_NAME).type(user.firstName);
  cy.get(Register.LAST_NAME).type(user.lastName);
  cy.get(Register.EMAIL).type(user.email);
  cy.get(Register.PASSWORD).type(user.password);
  cy.get(Register.PASSWORD_CONFIRMATION).type(user.passwordConfirmation);
  cy.get(Register.AGREEMENT).check();
  cy.get(Register.SUBMIT).click();
});

Cypress.Commands.add('login', (user) => {
  cy.visit('/');
  cy.get(Nav.LOGIN).click();
  cy.get(Login.EMAIL).type(user.email);
  cy.get(Login.PASSWORD).type(user.password);
  cy.get(Login.SUBMIT).click();
});

Cypress.Commands.add('logout', () => {
  cy.get(Nav.LOGOUT).click();
});
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

if (Cypress.env('coverage')) {
  afterEach(function () {
    const coverageFile = `${Cypress.config('coverageFolder')}/out.json`;

    cy.window().then((win) => {
      const coverage = win.__coverage__;

      if (!coverage) return;

      cy.task('coverage', coverage).then((map) => {
        cy.writeFile(coverageFile, map);

        if (Cypress.env('coverage') === 'open') {
          cy.exec('nyc report --reporter=html');
        }
      });
    });
  });
}
