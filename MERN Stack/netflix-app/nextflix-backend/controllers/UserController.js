const User = require("../models/UserModel");
const JWT = require("jsonwebtoken");
const jwtKey = 'e.com'
module.exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let result = await User.create({ email, password, likedMovies: [] });
    delete result.password;
    result = result.toObject();

    JWT.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send({ err: "error from backend" })
      }
      res.send({ result, token });
    })

  } catch (error) {
    console.log(error);
  }
}


module.exports.LogUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user =await User.findOne({email})
      if (user) {
        JWT.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
          if (err) {
            res.send({ err: "error from backend" })
          }
          res.send({ user,token });
        })
      }else{
        res.send("user not found")
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      const { likedMovies } = user;
      const moviesAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!moviesAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          {
            new: true,

          }
        );
      } else {
        return res.json({ msg: "Movie already added to likedMovies" });
      }
    }
  } catch (error) {
    return res.json({ msg: "Error adding movie" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      res.json({ msg: "success", movies: user.likedMovies });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Movie not found" });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "deleted", movies });
    }
  } catch (error) {
    return res.json({ msg: "Error deleting movie from backend" });
  }
};
