import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Countlist} from './Component/countlist'
import {Chatlist} from './Component/chatlist'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages:[],
      content:"",
    }
  }

 render() {

   return (
     <Chatlist></Chatlist>
   );
 }
}

export default App;
