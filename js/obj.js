var post = {
  title: "Starwars",
  text: "A New Hope",
  date: "1977",
  comments1: "Luke",
  comments2: "Vader",
  comments3: "Solo",
  picture: "x-wing"
};

var House = {
    bathrooms: "1",
    bedrooms: "2"
};

House.bathrooms
House.bedrooms


var mansion = Object.create(House); // create an mansion object, inheriting from the House class

mansion.bathrooms = 2;
mansion.bedrooms = 4;

mansion.bathrooms
mansion.bedrooms


var castle = Object.create(House); // create an castle object, inheriting from the House class

castle.bathrooms = 3;
castle.bedrooms = 5;

castle.bathrooms
castle.bedrooms