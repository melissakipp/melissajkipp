import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const clientConfig = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
