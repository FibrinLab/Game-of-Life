import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'
import Box from './Box'

type GridProps = {
    rows: number;
    columns: number;
    gridFull: boolean[][];
    selectBox: (row: number, column: number) => void;
}

function Grid(props: GridProps) {
    const width = props.columns * 14;
    let rowsArray = [];

    let boxClass = ""
    for (let i = 0; i < props.rows; i++) {
        for (let j = 0; j < props.columns; j++) {
            let boxId = i + ":" + j

            boxClass = props.gridFull[i][j] ? "boxActive" : "boxInactive";
            rowsArray.push(
                <Box 
                    boxClass = {boxClass}
                    key = {boxId}
                    boxId = {boxId}
                    row = {i}
                    column = {j}
                    selectBox = {props.selectBox}
                />
            );
        }
    }

    return (
        <div className={styles.gridbox} style={{width:width}}>
            {rowsArray}
        </div>
    )
}

export default Grid;