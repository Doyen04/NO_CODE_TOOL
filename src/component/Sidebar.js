
import Buttons from "./Button"


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