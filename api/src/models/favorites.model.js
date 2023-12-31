import Favorite from '../schemas/favorite.schema.js';

export class FavoritesModel {
  static getFavorites = async ({ userId }) => {
    const favorites = await Favorite.find({ userId });
    return favorites;
  };

  static addFavorites = async ({ movieId, title, overview, poster, url, userId }) => {
    const exist = await Favorite.findOne({ movieId })
    if (exist) throw new Error('Favorite already exists');

    const newFavorite = new Favorite({ movieId, title, overview, poster, url, userId });
    const savedFavorite = await newFavorite.save();
    return savedFavorite;
  };

  static removeFavorite = async ({ favId }) => {
    const removedFavorite = await Favorite.findByIdAndDelete(favId);
    return removedFavorite;
  };
}
