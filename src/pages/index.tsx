import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Nav from '@/components/Nav'
import Grid from '@/components/Grid'
import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [speed, setSpeed] = useState(100)
  const [rows, setRows] = useState(30)
  const [columns, setColumns] = useState(50)

  const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(columns).fill(false)))

  let selectBox = (rows, columns) => {
    let gridCopy = arrClone(gridFull)
    gridCopy[rows][columns] = !gridCopy[rows][columns];
    setGridFull(gridCopy)
  }

  const arrClone = (arr) => {
    return JSON.parse(JSON.stringify(arr))
  }

  const seed = () => {
		let gridCopy = arrClone(gridFull);
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
    setGridFull(gridCopy)
	}

  useEffect(() => {
    seed()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />

        <Grid 
          rows = {rows} 
          columns = {columns} 
          gridFull = {gridFull} 
          selectBox = {selectBox}
        />

        <Nav />
      </main>
    </>
  )
}
