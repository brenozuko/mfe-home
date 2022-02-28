import styles from "../styles/Home.module.css";

// import { Card } from "@ashkur/teste.ui.card";

import Link from 'next/link'

export default function Home() {
  const saveToken = () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJhdCI6IjIwMjItMDEtMzBUMTY6Mjc6MjIrMDA6MDAiLCJ1c2VyX2lkIjpudWxsLCJlbWFpbCI6InVyaWVsQGV2b2IuY29tLmJyIn0.Q9uwNDWuqwqhOA4VLdk9PhW0ePKspwHAHVtqpF8RouQ')
  }

  return (
    <div className={styles.container}>
      <h1>MICRO-FRONTEND HOME 2</h1>

      <button onClick={saveToken}>save token</button>

      <Link href="/cra">go to cra</Link>
    </div>
  );
}
