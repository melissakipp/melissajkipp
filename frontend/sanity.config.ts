import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '7dml8cqk',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2021-03-25',
  basePath: '/admin',
  plugins: [deskTool()],
  schemas: { types: schemas }
});

export default config;