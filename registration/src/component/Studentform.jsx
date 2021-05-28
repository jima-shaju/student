import React, { Component } from "react";
import Services from "../services/Services";

const intialState = {
  name: "",
  dob: "",
  classOption: "",
  divisionOption: "",
  gender: "",
  nameValid: "",
  dobValid: "",
  classValid: "",
  divisionValid: "",
  student: [],
};
class Studentform extends Component {
  state = intialState;

  formValidation = () => {
    let nameValid = "";
    let dobValid = "";
    let classValid = "";
    let divisionValid = "";

    if (!this.state.name) {
      nameValid = "name cannot be blank";
    } else if (!this.state.name.match(/^[a-zA-Z\s-, ]+$/)) {
      nameValid = "only letters ";
    }
    if (!this.state.dob) {
      dobValid = "dob cannot be blank";
    }
    if (!this.state.classOption) {
      classValid = " cannot be blank";
    }
    if (!this.state.divisionOption) {
      divisionValid = " cannot be blank";
    }
    if (nameValid || dobValid || classValid || divisionValid) {
      this.setState({ nameValid, dobValid, classValid, divisionValid });
      return false;
    }
    return true;
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDobChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };
  handleClassChange = (event) => {
    this.setState({
      classOption: event.target.value,
    });
  };
  handleDivisionChange = (event) => {
    this.setState({
      divisionOption: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      let set = {
        name: this.state.name,
        dob: this.state.dob,
        classOption: this.state.classOption,
        divisionOption: this.state.divisionOption,
        gender: this.state.gender,
      };
      Services.createStudent(set).then((res) => {
        console.log(res);
      });
      this.setState(intialState);
      alert("submit successfully.......");
    }
  };
  componentDidMount() {
    Services.getStudents().then((res) => {
      this.setState({ student: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <form
              className="bg-dark  m-3 container=sm  w-30 "
              onSubmit={this.handleSubmit}
            >
              <div className="mb-3 m-5">
                <label className="form-label text-info text-center font-family-sans-serif fs-1 fst-italic">
                  student registration
                </label>
              </div>
              <div className="mb-3 m-3">
                <label className="form-label text-white center ">Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  className="form-control w-30 "
                  id="text1"
                  placeholder="enter name"
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameValid}
              </div>
              <div className="mb-3 m-3">
                <label className="form-label text-white">date of birth</label>
                <input
                  type="date"
                  value={this.state.dob}
                  onChange={this.handleDobChange}
                  className="form-control w-30"
                  id="date1"
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.dobValid}
              </div>
              <div className="row mb-3">
                <div className="col m-3" style={{ fontSize: 12, color: "red" }}>
                  <label className="form-label text-white">Class</label>
                  <select
                    className="form-select w-30"
                    aria-label="Default select example"
                    id="optionList1"
                    selected
                    value={this.state.classOption}
                    onChange={this.handleClassChange}
                  >
                    <option>Open this select menu</option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="1"
                    >
                      I
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="2"
                    >
                      II
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="3"
                    >
                      III
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="4"
                    >
                      IV
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="5"
                    >
                      V
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="6"
                    >
                      VI
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="7"
                    >
                      VII
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="8"
                    >
                      VIII
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="9"
                    >
                      IX
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="10"
                    >
                      X
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="11"
                    >
                      XI
                    </option>
                    <option
                      selected
                      value={this.state.classOption}
                      onChange={this.handleClassChange}
                      value="12"
                    >
                      XII
                    </option>
                  </select>
                  {this.state.classValid}
                </div>
                <div className="col m-3" style={{ fontSize: 12, color: "red" }}>
                  <label className="form-label text-white">Division</label>
                  <select
                    className="form-select w-20"
                    aria-label="Default select example"
                    id="optionList2"
                    selected
                    value={this.state.divisionOption}
                    onChange={this.handleDivisionChange}
                  >
                    <option>Open this select menu</option>
                    <option
                      selected
                      value={this.state.divisionOption}
                      onChange={this.handleDivisionChange}
                      value="a"
                    >
                      A
                    </option>
                    <option
                      selected
                      value={this.state.divisionOption}
                      onChange={this.handleDivisionChange}
                      value="b"
                    >
                      B
                    </option>
                    <option
                      selected
                      value={this.state.divisionOption}
                      onChange={this.handleDivisionChange}
                      value="c"
                    >
                      C
                    </option>
                  </select>
                  {this.state.divisionValid}
                </div>
              </div>

              <div className=" m-3">
                <label className="form-label text-white">Gender</label>
                <label className="form-label text-white m-3">
                  <input
                    type="radio"
                    value="Male"
                    checked={this.state.gender === "Male"}
                    onChange={this.handleGenderChange}
                  />
                  Male
                </label>
                <label className="form-label text-white">
                  <input
                    type="radio"
                    value="FeMale"
                    checked={this.state.gender === "FeMale"}
                    onChange={this.handleGenderChange}
                  />
                  FeMale
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light  m-5 btn btn-outline-info"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="m-5 col s6">
            <table className=" table responsive-table ">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> DOB </th>
                  <th> class </th>
                  <th> div </th>
                  <th> gender </th>
                </tr>
              </thead>

              <tbody>
                {this.state.student.map((stud) => (
                  <tr key={stud.id}>
                    <td>{stud.name}</td>
                    <td>{stud.dob}</td>
                    <td>{stud.classOption}</td>
                    <td>{stud.divisionOption}</td>
                    <td>{stud.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Studentform;
