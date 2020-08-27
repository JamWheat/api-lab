const Game = require('../../models/game')

module.exports = {
  index,
  show,
  new: newGame,
  update,
  delete: deleteOne
}

function index(req, res){
  Game.find({}).then((games) => {
    res.status(200).json(games)
  })
}

function show(req, res){
  Game.findById(req.params.id).then((game) => {
    res.status(200).json(game)
  })
}

function newGame(req, res){
  Game.create(req.body).then((game)=> {
    res.status(201).json(game)
  })
}

function update(req, res){
  
}

function deleteOne(req, res){
  
}