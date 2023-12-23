import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/notes'

// to demonstrate handling promise error
const nonExist = {
    id: 999,
    content: 'CHANGE THIS NOTE IMPORTANCE',
    import: true
}

const getAll = () => axios
    .get(baseUrl)
    .then(response => response.data.concat(nonExist))

const create = newObject => axios
    .post(baseUrl, newObject)
    .then(response => response.data)

const update = (id, newObject) => axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)

export default { getAll, create, update }