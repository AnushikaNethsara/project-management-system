import React, { Component } from "react";
import TagInput from "../components/TagInput/TagInput";
import axios from "axios";
import constants from "../constants/constants";
import PropTypes from "prop-types";
import SkillSet from "../constants/skills";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class NewProject extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      //state used to like create variable and store data. here is like initialising all the attributes with initial values, like (let username = ' ';)
      title: "",
      description: "",
      skills: [],
      price: "0",
      fixedOptions: [SkillSet[2]],
    };
  }

  onChangeTitle(e) {
    //setting the title that entered in the text box (here target is textbox)
    this.setState({ title: e.target.value });
  }

  onChangeDescription(e) {
    //setting the descriptionthat entered in the text box (here target is textbox)
    this.setState({ description: e.target.value });
  }

  onChangeSkills(e) {
    //setting the skills that entered in the text box (here target is TagInput)
    this.setState({ skills: e.target.value });
  }

  onChangePrice(e) {
    //setting the price that entered in the text box (here target is textbox)
    this.setState({ price: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("des: " + this.state.skills);

    const project = {
      title: this.state.title,
      description: this.state.description,
      skills: this.state.skills,
      price: this.state.price,
      seller_id: localStorage.getItem("auth-id"),
    };

    console.log(project);

    //sending data to the mongodb dtabase with axios
    axios
      .post("http://localhost:5008/project/add", project)
      .then((res) => console.log(res.data));

    window.location = "/my-projects";
  }

  render() {
    return (
      <div>
        <div>
          <div
            class="container-lg shadow p-3 mb-5 bg-body rounded text-dark "
            style={{ marginTop: "5%", backgroundColor: "white" }}
          >
            <h3 className="text-center">ADD NEW PROJECT</h3>
            <br></br>
            <div class="container-sm   text-dark ">
              <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h4>Project Title</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <h4>Required Skills</h4>
                  </label>
                  {/* <TagInput
                    //have to handle input skills values and store them in a array
                    value={this.state.skills}
                    onChange={this.onChangeSkills}
                  /> */}
                  <Autocomplete
                    multiple
                    id="fixed-tags-demo"
                    value={this.state.skills}
                    onChange={(event, newValue) => {
                      this.setState({
                        skills: [
                          ...newValue.filter(
                            (option) =>
                              this.state.fixedOptions.indexOf(option) === -1
                          ),
                        ],
                      });
                    }}
                    options={SkillSet}
                    getOptionLabel={(option) => option}
                    renderTags={(tagValue, getTagProps) =>
                      tagValue.map((option, index) => (
                        <Chip label={option} {...getTagProps({ index })} />
                      ))
                    }
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label=""
                        variant="outlined"
                        placeholder="My Skills"
                      />
                    )}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h4>Project Description</h4>
                  </label>
                  <div class="mb-3">
                    <textarea
                      required
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h4>Price</h4>
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                  />
                </div>
                {/*  <h4>Attachments</h4>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div> */}
                <br></br>
                <button type="submit" className="btn btn-primary ">
                  Post Project
                </button>
              </form>
              <br></br>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default NewProject;
