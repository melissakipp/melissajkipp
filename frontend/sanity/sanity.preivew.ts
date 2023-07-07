'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './env';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

if (!projectId || !dataset) {
  throw new Error(`Missing Project ID or Dataset. Check your environment variables`);
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
