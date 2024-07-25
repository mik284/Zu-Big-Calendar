import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  locale: {
    default: 'en-US',
  },
  request: {},
  esbuildMinifyIIFE: true,
  routes: [
    {
      path: '/',
      component: '@/components/Layout',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          name: 'Home',
          path: '/home',
          component: './Home',
        },
        {
          name: 'Calendar',
          path: '/calendar',
          component: './Calendar',
        },
        {
          name: 'About Program-Line UP',
          path: '/about',
          component: './About',
        },
      ],
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
