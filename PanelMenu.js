import React,{useState} from 'react'
import PanelMenu1 from './PanelMenu1'
import PanelMenu2 from './PanelMenu2'
import './PanelMenu.css'

export default function PanelMenu() {
    const [show,setShow]=useState(false)
    const showList=()=>{
           setShow(!show)
    }
    return (
        <div className='menu'>
            <ul>
                <li>Home</li>
            </ul>
            <hr/>
                <PanelMenu1/>
                <hr/>
                <PanelMenu2/>
                <hr/>
            <ul>
                <li>Cinema</li>
            </ul>
            
        </div>
    )
}