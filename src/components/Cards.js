import React from 'react';
import Card from './Card';
import styles from "./Cardes.module.css";
import iphonex from "../image/iphonex.jfif";
import iphone13 from "../image/iphone13.jpg";
import sumsung from "../image/download (1).jfif";
import samsunga50 from "../image/download (2).jfif";
const Cards = () => {
    return (
        <div className={styles.container}>
            <Card image={iphonex} name='Iphonex' cost="500 $"/>
            <Card image={iphone13} name='Iphone13' cost="800 $"/>
            <Card image={sumsung} name='SAMSUNG' cost="400 $"/>
            <Card image={samsunga50} name='SAMSUNG A50' cost="350 $"/>
        </div>
    );
};

export default Cards;