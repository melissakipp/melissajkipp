import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'e318ytoo',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2023-06-06',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;