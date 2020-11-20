import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
             time : new Date()
        }
        this.intervalId = null;
    }
    componentDidMount(){
        this.intervalId = setInterval(() =>{
            this.setState({
                time : new Date()
            })
        },1*1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {

        return(
            <div className="clock">
               <h3 id="time">
                   {
                       this.getTimeString()
                   }
               </h3>
            </div>
        );
    }
    getTimeString(){
        const curTym = this.state.time;
        const [hours , minutes , seconds] = [curTym.getHours(), curTym.getMinutes(), curTym.getSeconds()];

        const AmOrPm = (hours >= 12 ? "PM" : "AM");
        const twlveHrFomt = hours  > 12 ? hours-12 : hours;
        const hrsStr = this.padnumTwoDig(twlveHrFomt);
        const minStr = this.padnumTwoDig(minutes);
        const secStr = this.padnumTwoDig(seconds);

        const tymString = `${hrsStr}:${minStr}:${secStr} ${AmOrPm}`;
        return tymString;
    }
    padnumTwoDig(num){
        return ((num<10 ? ("0") : "") + num);
    }
}


export default App;
