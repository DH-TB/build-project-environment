import React,{component} from 'react';
import {render} from 'react-dom';

class Hello extends React.Component{
    render(){
        return<div>Hello world
        <img src='./img/logo.jpg'/>
        </div>
    }
}

render(<Hello />,document.getElementById('app'));