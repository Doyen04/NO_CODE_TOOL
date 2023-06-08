
import { useState } from 'react';
import './App.css';
import Editor from './component/Editor'; 

function App() {
    return(
        <div className='App-container'>
            <Header>
                <MenuItem prop={'red'}/>
                <MenuItem prop={'rew'}/>
            </Header>
            <Editor/>
            <Header/>
        </div> 
    )
}

function Header({children}) {
    return(  
        <div className='header'>{children}</div>
    )
}
function MenuItem({prop}) {
    return (
        <div className='menu-items'>{prop}</div>
    )
}





export default App;

//how do react prevent js from show error for none js syntax
//how to pass parameters to component
//why must the argument for component be children
