const fs = require('fs')

const dataPath = require('path').resolve('./src/data/data.json')

const getNextId = (array) => {
  if (array.length !== 0) {
    let ids = array.map((x) => Number(x.id))
    let highestId = ids.reduce((a, b) => (a > b ? a : b))
    return String(++highestId)
  } else return '1'
}

const getData = () => JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const writeJson = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

const utilities = {
  getAllData: () => {
    return getData()
  },

  // users
  getIdFromUsername: (username) => {
    return getData().users.find((x) => x.username === username).id
  },
  getUserData: (id) => {
    return getData().users.find((x) => x.id === id)
  },
  login: ({ username, password }) => {
    let user = getData().users.find((x) => x.username === username)
    return user && user.password === password
  },
  registerUser: ({ username, firstName, lastName, password, country = '', city = '' }) => {
    let newUsers = [
      ...getData().users,
      { id: getNextId(getData().users), username, firstName, lastName, password, country, city },
    ]
    let newData = { ...getData(), users: newUsers }
    writeJson(newData)
    return newData
  },

  // messages
  getSentMessages: (id) => {
    return getData().messages.filter((m) => m.senderId === id)
  },
  getReceivedMessages: (id) => {
    return getData().messages.filter((m) => m.receiverId === id)
  },
  postMessage: ({ senderId, receiverId, text }) => {
    let newMessages = [
      ...getData().messages,
      {
        id: String(getNextId(getData().messages)),
        senderId,
        receiverId,
        text,
      },
    ]
    let newData = { ...getData(), messages: newMessages }
    writeJson(newData)
    return newData
  },
  deleteMessage: (id) => {
    let message = getData().messages.find((x) => x.id === id)
    if (!message) return 'Mensaje no encontrado. Revisa los parámetros o intenta con otro'
    if (message.notDeletable) return 'Este mensaje no puede ser borrado. Intenta con otro'
    let newMessages = [...getData().messages.filter((x) => x.id !== id)]
    let newData = { ...getData(), messages: newMessages }
    writeJson(newData)
    return newData
  },
}

module.exports = utilities
