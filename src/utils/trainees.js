import axios from 'axios';

// TODO 可以给axios设置默认baseUrl：http://localhost:8080
const TraineesUrl = 'http://localhost:8080/trainees';
const getTraineesData = () => {
  return axios.get(TraineesUrl);
};

export default getTraineesData;
