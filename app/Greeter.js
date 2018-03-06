



// var config = require('./config.json')


// module.exports = function(){
//   var greet = document.createElement('root');
//   greet.textContent =  config.greetText;
//   return greet
// }
import React ,{Component} from 'react';
import config from './config.json'
import styles from './main.css'

class Greeter extends Component{
  render(){
    console.log(config)
    return <div className={styles.root}>
      {config.greetText}
    </div>
  }
}

export default Greeter