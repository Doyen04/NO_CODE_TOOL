import Canvas from "./Canvas"



export default function CanvasContainer( ) {
    return(
        <div className='canvas-container'>
            <RulerHorizontal/>
            <div className="vertical-ruler-canvas-container">
                <RulerVertical/>
                <Canvas/>
            </div>
        </div>
    )
}
function UnitToggle() {
    return(
        <div className="unit-toggle">ttt</div>
    )
}
function RulerHorizontal(params) {
    return(
        <div className="horizontal-ruler-container">
            <UnitToggle/>
        </div>
    )
}

function RulerVertical(params) {
    return(
        <div className="vertical-ruler-container">yyy</div>
    )
}