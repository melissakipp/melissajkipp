import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: '7dml8cqk',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2021-03-25',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;