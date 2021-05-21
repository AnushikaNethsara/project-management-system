import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";
import MyCard from "../components/Card/Card";
import mern from "../img/mern.jpg";
import MyPagination from "../components/Pagination/Pagination";
import constants from "../constants/constants";
import Axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "web",
      projectList:[]
    };
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.setState({
      keyword: this.props.match.params.keyword
    });
    this.onSearch();
  }
  onSearch(){
    Axios.get( constants.backend_url + "/project/onSearch/" + this.state.keyword).then(response => {
      console.log(response.data)
      this.setState({
        projectList:response.data
      })
    }).catch(function (error) {
      console.log(error);
    })
  }
    render() {
        return (
            <div style={{ marginTop: "40px" }}>
              <Container>
                <h3 className="text-center">Search Results For "{this.state.keyword}"</h3>
                <br></br>
                <Row>
                  <Col>
                    <MyCard
                        image={mern}
                        title="Project Title"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        price="50"
                    ></MyCard>
                  </Col>

                </Row>
                <br></br>

                <br></br>
                <MyPagination></MyPagination>
              </Container>
            </div>
        );
    }
}

Search.propTypes = {};

export default Search;