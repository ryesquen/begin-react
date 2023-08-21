import { useState } from 'react'

export const AddCourse = ({ agregarCurso }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (evt) => {
    evt.preventDefault()
    agregarCurso(inputValue)
    setInputValue('')
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese Curso"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  )
}
