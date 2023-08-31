import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import banner from "../assets/images/pexels-photo-7678003.jpeg"

export default function Drinkspage() {
  return (
     <main>
            <Header url={banner} title="drinks"/>
            <Section menuHead="tea"/>
            <Section menuHead="water"/>
            <Section menuHead="coffee"/>
        </main>
  )
}
