// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="cypress" />

// Captura erros não tratados
Cypress.on('fail', (error, runnable) => {
  console.error('❌ Erro detectado durante a execução:', error.message);
  throw error; // Faz com que o erro apareça no terminal do VS Code
});

// Após cada teste, verifica se falhou e imprime o erro
afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.task('logError', `❌ Teste falhou: ${this.currentTest.title}`);
  } else {
    cy.log(`✅ Teste passou: ${this.currentTest.title}`);
  }
});