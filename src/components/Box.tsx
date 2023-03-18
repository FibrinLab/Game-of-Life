import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

type BoxProps = {
    row: number;
    column: number;
    boxClass: string;
    selectBox: (row: number, column: number) => void;
}

function Box(props: BoxProps): JSX.Element {
    const selectBox = (): void => {
        props.selectBox(props.row, props.column)
    }
    let className = props.boxClass

    return (
        <div 
            className = {styles[className]}
            id = {props.boxId}
            onClick = {selectBox}
        />
    )
}

export default Box;