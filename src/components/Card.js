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
        if(this.state.counter >=1){
            this.setState(prevstat =>({
                counter:prevstat.counter -1
            }))
        }
    }
    upHandler = ()=>{
        this.setState(prevstat =>({
            counter:prevstat.counter +1
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
                     <img className={counter ? "" : styles.downdisplay} src={down} alt="arrow down"  onClick={this.downHandler}/>
                     <span>{counter}</span>
                     <img src={up} alt="arrow up"  onClick={this.upHandler}/>
                </div>
             </div>
        );
    }
}

export default Card;