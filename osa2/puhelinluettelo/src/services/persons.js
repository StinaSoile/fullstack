import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const remove = (person) => {
  const request = axios.delete(`${baseUrl}/${person.id}`)
  return request.then((response) => response.data)
}

const change = (newObject) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return request.then((response) => response.data)
}

export default { getAll, create, remove, change }

// Tarkoittaa:
// export default {
//   getAll: getAll,
//   create: create,
//   update: update,
// };
