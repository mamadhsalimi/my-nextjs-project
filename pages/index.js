import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>University System</title>
        <meta name="description" content="University System Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Welcome to University System</h1>
          <p>Select a section to explore:</p>
          <ul>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/professors">Professors</Link>
            </li>
            <li>
              <Link href="/students">Students</Link>
            </li>
            <li>
              <Link href="/offeredCourses">Offered Courses</Link>
            </li>
          </ul>
        </main>
        <footer className={styles.footer}>
          <p>University System &copy; 2025</p>
        </footer>
      </div>
    </>
  );
}
