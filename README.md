# Performance Review E2E Test Suite

[![Cypress Tests](https://github.com/farzeenmuneer/performance-review-test-suite/actions/workflows/cypress.yml/badge.svg)](https://github.com/farzeenmuneer/performance-review-test-suite/actions/workflows/cypress.yml)

An end-to-end automated testing suite built with Cypress to validate role-based workflows across a performance review lifecycle.

## Tech Stack

- Cypress 16.x
- JavaScript ES6+
- Node.js 20.x
- GitHub Actions

## Features

- Employee and Manager role-based testing
- Login and authentication testing
- Session caching with `cy.session()`
- Custom Cypress commands
- Performance review creation and submission
- Review status validation
- Automated CI/CD testing
- Local HTML fixtures

## Project Structure

```text
performance-review-test-suite/
├── .github/workflows/cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.cy.js
│   │   │   └── role-login.cy.js
│   │   └── reviews/
│   │       └── review-lifecycle.cy.js
│   ├── fixtures/
│   │   └── login-page.html
│   └── support/
│       └── commands.js
├── cypress.config.js
├── package.json
└── README.md
