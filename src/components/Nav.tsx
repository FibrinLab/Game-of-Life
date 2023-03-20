import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Nav() {
    return (
        <div className={styles.description}>
          <p>
            <code className={styles.code}></code>
          </p>
          <p>
            <code className={styles.code}>Click Me</code>
          </p>
          <div>
            <p>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                >
                By{' '}
                <code className={styles.code}></code>
                </a>
            </p>
          </div>
        </div>
    )
}

export default Nav;