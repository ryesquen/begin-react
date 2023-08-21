import { useState } from 'react'
export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { value, name } = target
    setForm({ ...form, [name]: value })
  }
  return {
    ...form,
    form,
    onInputChange,
  }
}
