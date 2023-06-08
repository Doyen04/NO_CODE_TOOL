
import './App.css';

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
function Editor() {
    return(
        <div className='editor-container'>
            <SideBar/>
            <PropertyBar/>
            <Canvas/>
            <PropertyBar/>
            <SideBar/>
        </div>
    )
}
function SideBar({children}) {
    return(
        <div className='side-bar'></div>
    )
}
function PropertyBar( ) {
    return(
        <div className='property-bar'></div>
    )
}
function Canvas( ) {
    return(
        <div className='canvas-container'>ffff </div>
    )
}
export default App;

//how do react prevent js from show error for none js syntax
//how to pass parameters to component
//why must the argument for component be children