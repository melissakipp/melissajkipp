export const metadata = {
  title: 'Melissa J Kipp | Dashboard',
  description: 'Melissa J Kipp CMS Backend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
