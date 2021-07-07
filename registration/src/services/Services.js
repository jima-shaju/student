import axios from "axios";
class Services {
  getStudents = () => {
    return axios.get("http://localhost:8080/findAllStudents");
  };
  createStudent(set) {
    return axios.post("http://localhost:8080/addStudent", set);
  }
}

export default new Services();
