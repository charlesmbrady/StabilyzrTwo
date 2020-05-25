/// <reference types="cypress" />
import User from '../helpers/newUser';
import Project from '../helpers/newProject';

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import NewProject from '../elements/newProject';

describe('Projects', () => {
  it('User can create a new project', () => {
    const userOne = new User();
    const projectOne = new Project();

    cy.visit('/');
    cy.registerNewUser(userOne);
    cy.login(userOne);
    cy.createProject(projectOne);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');

    cy.get(Nav.LOGOUT).click();
  });
});
