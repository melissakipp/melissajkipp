import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const clientConfig = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
});
