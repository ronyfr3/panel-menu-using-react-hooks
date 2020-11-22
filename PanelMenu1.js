import React,{useState} from 'react'
import './PanelMenu.css'
export default function PanelMenu1() {
    const [show,setShow]=useState(false)
    const showList=()=>{
        setShow(!show)
 }
    return (
        <div className='menu'>
            <ul>
            <li onClick={showList}>Teaching 
            {
                    show ? '-' : '+'
                }
            </li>
                   
                   {show ? (
                        <ul>
                            <li>VUE</li>
                            <li>REACT</li>
                            <li>NODE</li>
                        </ul>) : ''
                   }
            </ul>
        </div>
    )
}