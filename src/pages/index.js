import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}
