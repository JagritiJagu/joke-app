import React from 'react';
import './App.css';
import axios from 'axios';
// import { useState } from 'react';

class App extends React.Component{

 state={joke:''};
// const[joke, setJoke]=useState("");
componentDidMount(){
   this.fetchAdvice();
}

fetchJoke=()=>{
    axios.get('https://icanhazdadjoke.com/slack')
    .then((response)=>{
        const{fallback}=response.data.attachments[0];
        console.log(fallback);
         this.setState({joke:fallback});
    })
    .catch((error)=>{
         console.log(error);
    });
}
    render(){
        const {joke}= this.state;
        return(
            <div className='app'>
                <div className='card'>
                    <div className='heading '><h1> {joke} </h1></div>
                    <button className='button' onClick={this.fetchJoke}>next joke</button>
                </div>
            </div>
                
        );
    }
}

export default App;