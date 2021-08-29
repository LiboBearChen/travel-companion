import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key":
            "c47255e639msh255d3eccdd41368p19ac64jsn5538af0be767",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      `https://community-open-weather-map.p.rapidapi.com/find`,
      {
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "c47255e639msh255d3eccdd41368p19ac64jsn5538af0be767",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
