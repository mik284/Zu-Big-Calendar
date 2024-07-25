import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  locale: { default: 'en-US' },
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routes,
  npmClient: 'pnpm',
  tailwindcss: {},
});
