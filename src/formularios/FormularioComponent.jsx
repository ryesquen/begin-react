import { useForm } from './Hooks/useForm'

export const FormularioComponent = () => {
  const initialForm = {
    inputUserName: '',
    inputEmail: '',
    inputPassword: '',
  }
  const { form, inputUserName, inputEmail, inputPassword, onInputChange } =
    useForm(initialForm)
  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log(form)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="htmlForm-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="htmlForm-control"
          name="inputUserName"
          placeholder="Enter User Name"
          value={inputUserName}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="htmlForm-group">
        <label htmlFor="inputEmail">Email address</label>
        <input
          type="email"
          className="htmlForm-control"
          name="inputEmail"
          placeholder="Enter email"
          value={inputEmail}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="htmlForm-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="htmlForm-control"
          name="inputPassword"
          placeholder="Password"
          value={inputPassword}
          onChange={onInputChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
