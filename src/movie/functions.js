const Movie = require("./table");

exports.createMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovie = async (movieObj) => {
  try {
    const findMovie = await Movie.findAll(movieObj);
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteMovie = async (movieObj) => {
  try {
    await Movie.destroy({
      where: { title: movieObj.title },
    });
  } catch (error) {
    console.log(error);
  }
};
