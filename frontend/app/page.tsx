import Link from 'next/link';

export const metadata = {
  title: 'Melissa J Kipp | Home',
};

export default function Home() {
  return (
    <main>
      <h1>Melissa Kipp</h1>
      <Link href='/projects'>Projects</Link>
    </main>
  );
}
