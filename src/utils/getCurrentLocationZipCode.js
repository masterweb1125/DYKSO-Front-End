import axios from "axios";

export const getCurrentLocationZipCode = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        async (pos) => {
            // const latitude = 40.70998;
            // const longitude = -74.02088
        const { latitude, longitude } = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        try {
          const res = await axios.get(url);
          if (res.data) {
            const zipCode = res.data.address.postcode;
            resolve(zipCode);
          } else {
            resolve(null);
          }
        } catch (error) {
          console.log("Something went wrong while fetching zipcode: ", error);
          reject(error);
        }
      },
      (error) => {
        console.log("Error getting location:", error);
        reject(error);
      }
    );
  });
};
