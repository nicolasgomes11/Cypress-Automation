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
      BASE_URL: process.env.BASE_URL,
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    testIsolation: false,
    defaultCommandTimeout: 20000, // Aumenta o tempo de espera para comandos padrão (10s)
    requestTimeout: 15000, // Aumenta o timeout para requisições HTTP (15s)
    pageLoadTimeout: 20000, // Aumenta o timeout para carregamento de página (20s)
  },
});
