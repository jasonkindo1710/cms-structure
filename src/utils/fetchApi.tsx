import axios from "axios";
export const baseUrl =
  "https://current-news.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "8ab1616db6mshdfabd9756c54707p1705c3jsn27ede2c83728",
      "X-RapidAPI-Host": "current-news.p.rapidapi.com",
    },
  });
  return data;
};
