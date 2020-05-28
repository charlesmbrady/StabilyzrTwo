/// <reference types="cypress" />
import User from '../helpers/newUser';
import Project from '../helpers/newProject';
import Test from '../helpers/newTest';

import Nav from '../elements/nav';
import Login from '../elements/login';
import Register from '../elements/register';
import NewProject from '../elements/newProject';
import NewTest from '../elements/newTest';
import ProjectPage from '../elements/project';
import Confirm from '../elements/confirm';
import Toolbar from '../elements/toolbar';

describe('Tests', () => {
  it('User can create test for project', () => {
    const user = new User();
    const project = new Project();

    cy.visit('/');
    cy.registerNewUser(user);
    cy.login(user);
    cy.createProject(project);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.get('[data-test="project-name"]').should('have.length', 1);
    cy.get('[data-test="project-card"]').click({ force: true });
    cy.wait(1000);
    cy.url().should('contain', '/projects/');
    cy.get(ProjectPage.CREATE_TEST_BUTTON).click();
    cy.wait(1000);
    cy.url().should('contain', '/tests/new');
    cy.get(NewTest.SUBJECT).type('asdfasdf');
    cy.get(NewTest.DESCRIPTION).type('asdfasdf');
    cy.get(NewTest.SUBMIT).click();
    cy.wait(1000);
    cy.url().should('not.contain', '/tests/new');
    cy.get(ProjectPage.VIEW_TESTS_BUTTON).click();
    cy.url().should('contain', '/tests');

    cy.get(Nav.LOGOUT).click();
  });

  it('User can create multiple tests for project', () => {
    const user = new User();
    const project = new Project();
    const test = new Test();
    const testTwo = new Test();

    cy.visit('/');
    cy.registerNewUser(user);
    cy.login(user);
    cy.createProject(project);
    cy.wait(2000);
    cy.url().should('not.contain', 'new');
    cy.get('[data-test="project-name"]').should('have.length', 1);
    cy.get('[data-test="project-card"]').click({ force: true });
    cy.wait(1000);
    cy.url().should('contain', '/projects/');
    cy.createTest(test);
    cy.wait(1000);
    cy.url().should('not.contain', '/tests/new');
    cy.url().should('contain', '/projects/');
    cy.createTest(testTwo);
    cy.wait(1000);
    cy.get(ProjectPage.VIEW_TESTS_BUTTON).click();
    cy.url().should('contain', '/tests');

    cy.get(Nav.LOGOUT).click();
  });

  it.only('User can view a test cases details', () => {
    const user = new User();
    const project = new Project();
    const test = new Test();

    cy.visit('/');
    cy.registerNewUser(user);
    cy.login(user);
    cy.createProject(project);
    cy.wait(500);
    cy.get('[data-test="project-card"]').click({ force: true });
    cy.wait(500);
    cy.createTest(test);
    cy.wait(500);
    cy.get(ProjectPage.VIEW_TESTS_BUTTON).click();
    cy.get('[data-test="test-subject"]').should('have.length', 1);
    cy.get('[data-test="test-list-entry"]').click({ force: true });
    cy.wait(500);
    cy.url().should('contain', '/tests/');
  });
});
