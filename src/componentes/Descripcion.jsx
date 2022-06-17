import React from 'react'
import { Cont } from './Cont'
import {Text} from './Text'
import './Des.css'
function Descripcion() {
  return (
    <div className='er'>
        <Text/>
        <div className='des'>I chose design track because I love to design beautiful user-centered interfaces.</div>
        <Cont/>
    </div>
  )
}

export  {Descripcion}