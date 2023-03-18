import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

function Header() {
    const [generation, setGeneration] = useState(0);

    return (
        <div className={styles.description}>
          <p>
            <code className={styles.code}>The Game of Life</code>
          </p>
          <p>
            <code className={styles.code}>Generations: {generation}</code>
          </p>
          <div>
            <p>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                >
                By{' '}
                <code className={styles.code}>FibrinLab</code>
                </a>
            </p>
          </div>
        </div>
    )
}

export default Header;