// import React from 'react'
import banner from "../assets/images/pexels-photo-5774154.jpeg"
import Header from "../components/Header"
import Section from "../components/Section"

export default function Meatpage() {
  return (
        <main>
            <Header url={banner} title="meat"/>
            <Section menuHead="beef"/>
            <Section menuHead="chicken"/>
            <Section menuHead="mutton"/>
            <Section menuHead="fish"/>
        </main>
  )
}
