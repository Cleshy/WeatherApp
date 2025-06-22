export const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = { latitude, longitude };
        return userLocation;
      },
      (error) => {
        console.log("Error getting user location:", error);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser!");
  }
};
