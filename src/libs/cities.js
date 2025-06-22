const popularCities = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Rome",
  "Berlin",
  "Madrid",
  "Los Angeles",
  "Chicago",
  "Toronto",
  "Dubai",
  "Singapore",
  "Barcelona",
  "Amsterdam",
  "Vienna",
  "Seoul",
  "Bangkok",
  "Istanbul",
  "San Francisco",
];

export const getRandomCities = (count) => {
  const randomCities = [];

  for (let i = 0; i < count; i++) {
    const rnd = Math.floor(Math.random() * popularCities.length) + 1;

    randomCities.push(popularCities[rnd]);
  }

  return randomCities;
};
