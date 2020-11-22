import React,{useState} from 'react'
import './PanelMenu.css'
export default function PanelMenu2() {
    const [show,setShow]=useState(false)
    const showList=()=>{
        setShow(!show)
 }
    return (
        <div className='menu'>
            <ul>
            <li onClick={showList}>Learning
            {
                    show ? '-' : '+'
                }
            </li>
                   
                   {show ? (
                        <ul>
                            <li>ROCKS</li>
                            <li>POP</li>
                            <li>LILPO</li>
                        </ul>) : ''
                   }
            </ul>
        </div>
    )
}