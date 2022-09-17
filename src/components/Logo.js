import React, { Component } from 'react';
import styles from "./Logo.module.css";
class Logo extends Component {
    render() {
        const {image}=this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="logo" />
            </div>
        );
    }
}

export default Logo;