import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Nav from '@/components/Nav'
import Grid from '@/components/Grid'
import React, { useEffect, useState } from 'react'
import { JsxElement } from 'typescript'

const inter = Inter({ subsets: ['latin'] })

interface State {
  speed: number;
  rows: number;
  columns: number;
  gridFull: boolean[][];
}

export default function Home(): JSX.Element {

  const [speed, setSpeed] = useState<State["speed"]>(100)
  const [rows, setRows] = useState<State["rows"]>(30)
  const [columns, setColumns] = useState<State["columns"]>(50)
  const [gridFull, setGridFull] = useState<State["gridFull"]>(Array(rows).fill(null).map(() => Array(columns).fill(false)));

  let selectBox = (rows: number, columns: number) => {
    let gridCopy = arrClone(gridFull)
    gridCopy[rows][columns] = !gridCopy[rows][columns];
    setGridFull(gridCopy)
  }

  const arrClone = (arr: State["gridFull"]) => {
    return JSON.parse(JSON.stringify(arr)) as State["gridFull"]
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
