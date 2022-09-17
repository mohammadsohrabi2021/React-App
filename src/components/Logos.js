import React, { Component } from 'react';
import styles from "./Logos.module.css";
import Logo from './Logo';
import LogoApple from "../image/logoapple.png";
import SAMSUNG from "../image/download.png";
import Xiaomi from "../image/Xiaomi-Mi-Logo.jpg";
class Logos extends Component {
    render() {
        return (
            <div className={styles.container}>
              <h2>Who supports us?</h2>
              <div className={styles.logo}>
                  <Logo image={LogoApple}/>
                  <Logo image={SAMSUNG}/>
                  <Logo image={Xiaomi}/>
              </div>
            </div>
        );
    }
}

export default Logos;