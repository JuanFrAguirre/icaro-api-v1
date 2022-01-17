const utils = require('../fs/fsUtilities')

const api = {
  home: (req, res) => res.send('API works!'),
  // users
  getUsers: (req, res) => {
    res.send(utils.getAllData().users)
  },
  getUserData: (req, res) => {
    let { username } = req.params
    res.send(utils.getUserData(utils.getIdFromUsername(username)))
  },
  postLogin: (req, res) => {
    utils.login(req.body)
      ? res.json({ loginSuccesful: true, message: 'Exito! Credenciales correctas' })
      : res.json({ loginSuccesful: false, message: 'Credenciales incorrectas. Vuelve a intentarlo' })
  },
  postRegister: (req, res) => {
    utils.getAllData().users.find((x) => x.username === req.body.username)
      ? res.send('Ese nombre de usuario ya esta registrado')
      : res.send(utils.registerUser(req.body))
  },

  // messages
  getMessages: (req, res) => {
    res.send(utils.getAllData().messages)
  },
  getSentMessages: (req, res) => {
    let { username } = req.params
    res.send(utils.getSentMessages(utils.getIdFromUsername(username)))
  },
  getReceivedMessages: (req, res) => {
    let { username } = req.params
    res.send(utils.getReceivedMessages(utils.getIdFromUsername(username)))
  },
  postMessage: (req, res) => {
    let userId = utils.getIdFromUsername(req.params.username)
    let message = { ...req.body, senderId: userId }
    res.send(utils.postMessage(message))
  },
  deleteMessage: (req, res) => {
    let { messageId } = req.params
    res.send(utils.deleteMessage(messageId))
  },
}

module.exports = api
