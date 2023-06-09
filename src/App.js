
import { useState } from 'react';
import './App.css';
import Editor from './component/Editor'; 

function App() {
    const [page, setPage] = useState([<Editor/>])
    const [pageCount, setpageCount] = useState(1)//plan to remove
    const [currentPage, setcurrentPage] = useState(0)
    return(
        <div className='App-container'>
            <Header>
                <MenuItem prop={'red'} pagearray={page} current={pageCount} pagesetter={setPage} countsetter={setpageCount}/>
                {/* <MenuItem prop={'rew'}/> */}
            </Header>
            {page[currentPage]}
            {/* <Editor/> */}
            <Header children={pageCount}/>

        </div> 
    )
}

function Header({children}) {
    return(  
        <div className='header'>{children}</div>
    )
}
function MenuItem({prop,pagearray, current, pagesetter, countsetter}) {
    function handleclick(ev) {
        pagesetter([...pagearray,<Editor/>])
        countsetter(current + 1)
        // setcurrentPage(current)
    }
    return (
        <div className='menu-items' onClick={handleclick}>{prop}</div>
    )
}





export default App;

//how do react prevent js from show error for none js syntax
//how to pass parameters to component
//why must the argument for component be children
