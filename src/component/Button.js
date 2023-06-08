

export default function Buttons({obj} ) {
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