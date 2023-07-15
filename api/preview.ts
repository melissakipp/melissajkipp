import type { NextApiRequest, NextApiResponse } from 'next';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({}); // can be set with a token
  res.writeHead(307, { Location: '/blog/post/preview' });
  res.end();
}
