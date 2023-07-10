import { createClient } from '@sanity/preview-kit/client';

import { apiVersion, dataset, projectId } from '../env';

const config = {
  // ...base config options

  // Required: when "encodeSourceMap" is enabled
  // Set it to relative or absolute URL of your Sanity Studio
  studioUrl: '/admin', // or 'https://your-project-name.sanity.studio'

  // Required: for encoded metadata from Content Source Maps
  // 'auto' is the default, you can also use `true` or `false`
  encodeSourceMap: 'auto',
};

export const clientConfig = createClient({
  ...config,
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
});
