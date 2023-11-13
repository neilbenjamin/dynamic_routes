// Main Index Page

import Link from 'next/link'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>THIS IS THE ROOT ROUTE. </h1>
        <Link href="http://localhost:3000/products/"><p>Please visit this link for the products page</p></Link>
      
      </div>
    </main>
  )
}
