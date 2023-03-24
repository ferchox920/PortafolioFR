import React, { useState } from 'react'
import Description from '../../Components/Description/Description'
import Hero from '../../Components/Hero/Hero'

const Home = () => {


  return (
    <>
      <Hero onLoad={() => setLoading(false)} />
      <Description onLoad={() => setLoading(false)} />
    </>
  )
}

export default Home
