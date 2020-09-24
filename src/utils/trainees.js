import axios from "axios";

const TraineesUrl = "http://localhost:8080/trainees";
const getTraineesData = () => {
  return axios.get(TraineesUrl);
}

export default getTraineesData;
