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
  const shuffled = [...popularCities].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
