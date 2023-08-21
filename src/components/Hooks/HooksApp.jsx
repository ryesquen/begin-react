import { useContador } from './useCustomCounterHook'

export const HooksApp = () => {
  const { contador, incrementar, reiniciar, decrementar } = useContador(0)
  return (
    <>
      <h1>aplicación con hooks</h1>
      <p>{contador}</p>
      <button onClick={() => incrementar()}>+1</button>
      <button onClick={() => reiniciar()}>reset</button>
      <button onClick={() => decrementar()}>-1</button>
    </>
  )
}
