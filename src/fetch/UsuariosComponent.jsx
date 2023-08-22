import { useFetch } from './useFetch'

export const UsuariosComponent = () => {
  const { data, isLoading, errors } = useFetch({
    url: 'https://jsonplaceholder.typicode.com/users',
  })
  return (
    <>
      <h1>Lista de Usuario</h1>
      {isLoading ? (
        'Loading....'
      ) : errors ? (
        <p>se produjo un error</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
