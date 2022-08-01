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
    const findMovie = await Movie.findAll({
      where: { title: movieObj.title },
    });
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  try {
    if (movieObj.title) {
      await Movie.update(
        { title: movieObj.newTitle },
        { where: { title: movieObj.title } }
      );
    } else if (movieObj.actor) {
      await Movie.update(
        { actor: movieObj.newActor },
        { where: { actor: movieObj.actor } }
      );
    }
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
