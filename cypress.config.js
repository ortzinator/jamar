import { defineConfig } from 'cypress';
import swapEnv from './cypress/plugins/swap-env.js';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost',
        allowCypressEnv: false,
        setupNodeEvents(on) {
            on('task', swapEnv);
        },
    },
});