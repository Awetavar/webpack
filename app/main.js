// const greeter = require('./Greeter');

// document.getElementById('root').appendChild(greeter())

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter'

console.log(Greeter)
render(<Greeter/>,document.getElementById('root'))