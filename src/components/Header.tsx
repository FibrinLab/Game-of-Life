import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

function Header() {
    return (
        <div className={styles.description}>
          <p>
            <code className={styles.code}>Game of Life</code>
          </p>
          <p>
            <code className={styles.code}>Generations: {}</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <code className={styles.code}>FibrinLab</code>
            </a>
          </div>
        </div>
    )
}

export default Header;