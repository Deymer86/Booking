import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'

const Results = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if(user == undefined){
    return <Navigate to ="/"/>
  }

  return (
    <Container>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
     
  );
};

export default Results;
