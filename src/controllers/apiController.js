const { getAllData } = require('../fs/fsUtilities')
const utils = require('../fs/fsUtilities')

const api = {
  home: (req, res) => res.render('pages/index', { url: 'https://icaro-api-v1.herokuapp.com' }),
  // users
  getUsers: (req, res) => {
    res.send(utils.getAllData().users)
  },
  getUserData: (req, res) => {
    let { username } = req.params
    res.send(utils.getUserData(utils.getIdFromUsername(username)))
  },
  postLogin: (req, res) => {
    if (!req.body.username || !req.body.password) res.send('Faltan datos o están incorrectos')
    utils.login(req.body)
      ? res.json({ loginSuccesful: true, message: 'Login exitoso!' })
      : res.json({ loginSuccesful: false, message: 'Credenciales incorrectas. Vuelve a intentarlo' })
  },
  postRegister: (req, res) => {
    if (!req.body.username || !req.body.firstName || !req.body.lastName || !req.body.password)
      res.send('Falta algún dato. Revisa y vuelve a intentar')
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
    if (!req.body.text) res.send('Falta el campo de texto')
    if (!req.body.receiverId || !utils.getUserData(req.body.receiverId))
      res.send('El destinatario no existe o falta el campo receiverId')

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
