import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import missinpic from '../../assets/mission.jpg'
import Backtestmonial from './reusableComponent/Backtestmonial'

export default function Mission() {
  return (
    <div>
        <Header/>
        <Backtestmonial  imgs={missinpic} title="Mission" />
        <Footer/>
    </div>
  )
}
