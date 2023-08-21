import { useState } from 'react'

export const useContador = (initial) => {
  const [contador, setContador] = useState(initial)
  const incrementar = () => {
    setContador(contador + 1)
  }
  const reiniciar = () => {
    setContador(0)
  }
  const decrementar = () => {
    contador === 0 ? setContador(0) : setContador(contador - 1)
  }
  return {
    contador,
    incrementar,
    reiniciar,
    decrementar,
  }
}
