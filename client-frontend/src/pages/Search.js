import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";
import MyCard from "../components/Card/Card";
import mern from "../img/mern.jpg";
import MyPagination from "../components/Pagination/Pagination";
import constants from "../constants/constants";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";

//
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      projectList:[]
    };
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.setState({
      keyword: this.props.match.params.keyword
    });
    this.onSearch(this.props.match.params.keyword);
  }
  onSearch(keyword){
    Axios.get( constants.backend_url + "/project/onSearch/" + keyword).then(response => {
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

                  {this.state.projectList.length !=0 ?
                      <Row>
                        {this.state.projectList &&
                        this.state.projectList.map((item) => {
                          return <MyCard data={item} />;
                        })}
                      </Row>
                      :
                      <div>
                        <br/><br/>
                        <center><Alert variant="success"><h4>No Available Projects!!</h4></Alert></center>

                      </div>

                  }



                <br></br>

                <br></br>
                {/*<MyPagination></MyPagination>*/}
              </Container>
            </div>
        );
    }
}

Search.propTypes = {};

export default Search;