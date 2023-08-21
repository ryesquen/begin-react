import { useState } from 'react'
import { AddCourse } from './AddCourse'

const Curso = ({ curso, aprobo }) => {
  return <>{aprobo && <li>{curso}</li>}</>
}

export const ListadoArray = () => {
  const addCourse = () => {
    setCursos([
      ...cursos,
      {
        curso: `curso #${Math.random()}`,
        aprobo: true,
      },
    ])
  }
  let listadoCursos = [
    {
      curso: 'matemática',
      aprobo: true,
    },
    {
      curso: 'física',
      aprobo: true,
    },
    {
      curso: 'química',
      aprobo: false,
    },
    {
      curso: 'geografía',
      aprobo: true,
    },
  ]
  const [cursos, setCursos] = useState(listadoCursos)
  const onAgregarCurso = (curso)=>{
    setCursos([
      ...cursos,
      {
        curso: curso,
        aprobo: true,
      },
    ])
  }
  return (
    <>
      <h1>Listado de Cursos</h1>
      <AddCourse agregarCurso={onAgregarCurso}></AddCourse>
      <ul>
        {cursos.map((c) => (
          <Curso key={c.curso} curso={c.curso} aprobo={c.aprobo}></Curso>
        ))}
      </ul>
      <button onClick={addCourse}>agregar Curso</button>
    </>
  )
}
