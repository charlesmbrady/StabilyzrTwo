/// <reference types="cypress" />
import User from '../helpers/newUser';
import Project from '../helpers/newProject';

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import NewProject from '../elements/newProject';
import ProjectPage from '../elements/project';
import Confirm from '../elements/confirm';

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
    cy.get('[data-test="project-name"]').should('have.length', 1);
    cy.get('[data-test="project-name"]').should('have.text', projectOne.name);

    cy.get(Nav.LOGOUT).click();
  });

  it('User can create multiple projects', () => {
    const userTwo = new User();
    const projectTwo = new Project();
    const projectThree = new Project();
    const projectFour = new Project();

    cy.visit('/');
    cy.registerNewUser(userTwo);
    cy.login(userTwo);
    cy.createProject(projectTwo);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.createProject(projectThree);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.createProject(projectFour);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.get('[data-test="project-name"]').should('have.length', 3);

    cy.get(Nav.LOGOUT).click();
  });

  it('User can view a project', () => {
    const userThree = new User();
    const projectSix = new Project();

    cy.visit('/');
    cy.registerNewUser(userThree);
    cy.login(userThree);
    cy.createProject(projectSix);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.get('[data-test="project-name"]').should('have.length', 1);
    cy.get('[data-test="project-card"]').click({ force: true });
    cy.wait(1000);
    cy.url().should('contain', '/projects/');

    cy.get(Nav.LOGOUT).click();
  });

  it('User can delete a project', () => {
    const userThree = new User();
    const projectSix = new Project();

    cy.visit('/');
    cy.registerNewUser(userThree);
    cy.login(userThree);
    cy.createProject(projectSix);
    cy.wait(1000);
    cy.get('[data-test="project-card"]').click({ force: true });
    cy.wait(1000);
    cy.url().should('contain', '/projects/');
    cy.get(ProjectPage.DELETE_PROJECT_BUTTON).click();
    cy.wait(1000);
    cy.url().should('contain', '/confirm');
    cy.get(Confirm.DELETE_BUTTON).click();
    cy.wait(1000);
    cy.url().should('contain', '/dashboard');
    cy.get('[data-test="project-name"]').should('have.length', 0);

    cy.get(Nav.LOGOUT).click();
  });
});
