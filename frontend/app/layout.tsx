import '@/styles/globals.scss';
import { Roboto_Flex, Roboto_Mono, Sansita_Swashed } from 'next/font/google';

export const metadata = {
  title: 'Melissa J Kipp',
  description: 'Full Stack Engineer, DevOps (AWS), and Design Ops',
};

const RobotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--fontMain',
  display: 'fallback',
});

const RobotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fontMono',
});

const SansitaSwashed = Sansita_Swashed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fontDeco',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${RobotoFlex.variable} ${RobotoMono.variable} ${SansitaSwashed.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
