import '@/styles/globals.scss';

import Head from 'next/head';

export const metadata = {
  title: 'Melissa J Kipp | Dashboard',
  description: 'Full Stack Engineer, DevOps (AWS), and Design Ops',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
