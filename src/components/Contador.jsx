import { useState } from 'react'

export const Contador = ({ value }) => {
  const [contador, setContador] = useState(value)

  const handleClick = () => {
    setContador(contador + 1)
    console.log(`valueButton ${contador}`)
  }
  return (
    <>
      <h1>hola pe</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>clickeaME</button>
    </>
  )
}
