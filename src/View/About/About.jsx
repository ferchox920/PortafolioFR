import React, { useState } from 'react'
import AboutInfo from '../../Components/About/AboutInfo'

const About = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div>Cargando...</div>}
      <AboutInfo onLoad={() => setLoading(false)} />
    </>
  )
}

export default About
