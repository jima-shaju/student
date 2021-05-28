import axios from "axios";
const student_url = "http://localhost:8080/findAllStudents";
class Services {
  getStudents = () => {
    return axios.get(student_url);
  };
  createStudent(set) {
    return axios.post("http://localhost:8080/addStudent", set);
  }
}

export default new Services();
