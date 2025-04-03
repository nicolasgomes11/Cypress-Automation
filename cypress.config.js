import 'dotenv/config';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logError(message) {
          console.error(`❌ Erro no teste: ${message}`);
          return null;
        },
      });

      return config; // Retorna a configuração modificada (boa prática)
    },
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
      BASE_URL: process.env.BASE_URL,
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    testIsolation: false,
    defaultCommandTimeout: 20000,
    requestTimeout: 15000,
    pageLoadTimeout: 20000,
  },
});