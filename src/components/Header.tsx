import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

interface HeaderProps {
    generation: number;
}

function Header(props: HeaderProps): JSX.Element {

    return (
        <div className={styles.description}>
          <p>
            <code className={styles.code}>The Game of Life</code>
          </p>
          <p>
            <code className={styles.code}>Generations: {props.generation}</code>
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