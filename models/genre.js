const mongoose = require('mongoose');
const { Schema } = mongoose;

// Створення схеми для жанрів
const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  }
});

// Віртуальний параметр для URL-адреси жанру
genreSchema.virtual('url').get(function () {
  return `/genre/${this._id}`;
});

// Створення та експорт моделі
const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;

