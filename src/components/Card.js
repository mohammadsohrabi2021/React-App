import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../image/down.svg";
import up from "../image/up.svg";
class Card extends Component {
    constructor(){
        super();
        this.state={
            counter : 0
        }
    }
    downHandler = ()=>{
        this.setState(prevState=>({
            counter :prevState.counter+1
        }))
    }
    render() {
        const {image ,name , cost}=this.props;
        const {counter} =this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="card"/>
                <h3>{name}</h3>
                <p>{cost}</p>
                <div className={styles.counter}>
                     <img src={down} alt="arrow down" onClick={this.downHandler}/>
                     <span>{counter}</span>
                     <img src={up} alt="arrow up"/>
                </div>
             </div>
        );
    }
}

export default Card;