import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas/index';

const config = defineConfig({
  projectId: 'e318ytoo',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2023-06-06',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas
  }
});

export default config;