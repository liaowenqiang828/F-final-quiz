import axios from 'axios';

const addTrainee = (traineeData) => {
  axios({
    url: "http://localhost:8080/trainess/trainee",
    method: "post",
    data: {
      traineeData
    }
  })
    .catch(() => {
      console.log("学员添加失败");
    })
}

export default addTrainee;
