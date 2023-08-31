import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import banner from "../assets/images/pexels-photo-57556.jpeg"

export default function Fruvegpage() {
  return (
      <main>
            <Header url={banner} title="fru & veg"/>
            <Section menuHead="beef"/>
            <Section menuHead="chicken"/>
            <Section menuHead="mutton"/>
            <Section menuHead="fish"/>
        </main>
  )
}
