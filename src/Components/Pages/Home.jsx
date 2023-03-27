import React from 'react'
import AboutComp from '../AboutComp/AboutComp'
import BacktoTop from '../BacktoTop/BacktoTop'
import Card from '../Card/Card'
import ContactComp from '../ContactComp/ContactComp'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ServicesComp from '../ServicesComp/ServicesComp'


function Home() {
  return (
    <>
      <Header />
      <AboutComp />
      <Card />
      <ServicesComp/>
      <ContactComp />
      <Footer />
      <BacktoTop />
    </>
  )
}

export default Home