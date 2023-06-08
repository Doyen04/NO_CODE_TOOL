import flexicon from '../svg/flex.svg'
import cursoricon from '../svg/cursor.svg'
import recticon from '../svg/rect.svg'
import circleicon from '../svg/circle.svg'
import gridicon from '../svg/grid.svg'
import frameicon from '../svg/net-grid.svg'
import tableicon from '../svg/table.svg'

import SideBar from './Sidebar'
import PropertyBar from './PropertyBar'
import Canvas from './Canvas'


export default function Editor() {
    let leftButtonData = [
    {child:cursoricon, type:"tool"},{child:recticon, type:"tool"},{child:circleicon, type:"tool"},
    {child:flexicon, type:"tool"}, {child:gridicon, type:"tool"}, {child:frameicon, type:"tool"},
    {child:tableicon, type:"tool"}, {child:"wef", type:"tool"}, {child:"xs", type:"tool"},
    {child:"cxv", type:"tool"}, {child:"wsa", type:"tool"}, {child:"qwe", type:"tool"},
    {child:"asd", type:"tool"}, {child:"sax", type:"tool"}, {child:"rfd", type:"tool"},
    ]
    let rightButtonData = [
    {child:"black", type:"color"},{child:"grey", type:"color"},{child:"white", type:"color"},
    {child:"gold", type:"color"},{child:"cyan", type:"color"},{child:"red", type:"color"},
    {child:"green", type:"color"},{child:"lime", type:"color"},{child:"yellow", type:"color"},
    {child:"crimson", type:"color"},{child:"brown", type:"color"},{child:"pink", type:"color"},
    {child:"purple", type:"color"},{child:"indigo", type:"color"},{child:"goldenrod", type:"color"},
    {child:"magenta", type:"color"},{child:"violet", type:"color"},{child:"peach", type:"color"},
    {child:"darkblue", type:"color"},{child:"le", type:"custom"},
    ]

    return(
        <div className='editor-container'>
            <SideBar array={leftButtonData}  />
            <PropertyBar/>
            <Canvas/>
            <PropertyBar/>
            <SideBar array={rightButtonData}/>
        </div>
    )
}