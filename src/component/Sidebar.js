

function Buttons({obj} ) {
    if (obj.type === "tool") { 
        return ( 
            <button className='tool-button'>
                <img src={obj.child} className='button-icon' alt={"flexicon"}/>
            </button>
        )
    } else if (obj.type === "color") {
        return <button className='tool-button' style={{backgroundColor: obj.child}}></button>
    }else if (obj.type === "custom") {
        return <button className='tool-button'>{obj.child}</button>
    }
}

export default function SideBar({array}) {
    // alert(typeof(array));  
    const buttons = array.map(elem =>
        <Buttons obj={elem}/>
    )
    return(
        <div className='side-bar'>
            {buttons}
        </div>
    )
}