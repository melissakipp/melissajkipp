import Link from 'next/link';
import styles from '../styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Melissa Kipp</h1>
      <Link href="/projects">Projects</Link>
    </main>
  );
}
