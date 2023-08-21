const Items = ({ nombre, visto }) => {
  return (
    <>
      {/* <li>
        {nombre} {visto ? '🤟🏿' : '🐈‍⬛'}
      </li> */}
      {visto && <li>{nombre}</li>}
    </>
  )
}

export const Listado = () => {
  return (
    <>
      <h1>Listado</h1>
      <ul>
        <Items nombre="Renzo" visto={false} />
        <Items nombre="Cata" visto={true} />
        <Items nombre="Lu" visto={true} />
      </ul>
    </>
  )
}
