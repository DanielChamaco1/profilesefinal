import React from 'react'
import Ho from '../ase/ho.png'
import Se from '../ase/se.png'
import {Descripcion} from './Descripcion'
function Header() {
  return (
    <div>
        
        <img src={Ho} alt="hojAS" className='ho'/>
        <img src={Se} alt="se" className='se'/>
        <Descripcion/>
        
    </div>
  )
}

export default Header