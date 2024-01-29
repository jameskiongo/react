import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cw6CaQWa0mRw-tdWNdJpb5915bZ1fjBUCqLn1Qi1lrU",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
