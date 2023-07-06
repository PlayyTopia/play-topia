const Game = require("../models/game");


const allGames = (req, res) => {

    Game.find()
      .then((data) => { 
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

  // const favoriteGames = (req, res) => {
  //   const userId = req.params.id;
  //   Game.find({ UsersIdFavorite: { $in: [userId] } })
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((error) => {
  //       errorHandler(error, req, res);
  //     });
  // };

  const newGame =  async (req, res) => {
    const { title, thumbnail , short_description ,game_url,freetogame_profile_url } = req.body;
    console.log(title, thumbnail , short_description ,game_url,freetogame_profile_url)
      const game = new Game({ title, thumbnail , short_description ,game_url,freetogame_profile_url });
      const game0 = await game.save();
      res.json(game0);

};


const updateGame = async (req, res) => {
    const cardId  = req.params.id;
    const { UsersIdRate,rate,rating } = req.body; 
    const game = await Game.findByIdAndUpdate(cardId, {UsersIdRate,rate,rating}, { new: true });
    const updatedGame = await game.save();
    console.log(updatedGame)
    res.json(updatedGame);
};

const updateGameFav = async (req, res) => {
    const cardId  = req.params.id;
    const { UsersIdFavorite } = req.body; 
    console.log(UsersIdFavorite,cardId)
    const game = await Game.findByIdAndUpdate(cardId, {UsersIdFavorite});
    console.log(game)
    const updatedGame = await game.save();
    console.log(updatedGame)
    res.json(updatedGame);
};

module.exports = {
    allGames,
    newGame,
    updateGame,
    updateGameFav
  }; 
  