import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import banner from "../assets/images/pexels-photo-4699096.jpeg"


export default function Cakepage() {
  return (
      <main>
            <Header url={banner} title="cakes"/>
            <Section menuHead="beef"/>
            <Section menuHead="chicken"/>
            <Section menuHead="mutton"/>
            <Section menuHead="fish"/>
        </main>
  )
}
