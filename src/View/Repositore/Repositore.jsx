import React, { useState } from 'react'
import Cards from '../../Components/Cards/Cards'
import WriteMachine from '../../Components/WriteMachine/WriteMachine'

const Repositore = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div>Cargando...</div>}
      <Cards onLoad={() => setLoading(false)} />
      <WriteMachine onLoad={() => setLoading(false)} />
    </>
  )
}

export default Repositore
