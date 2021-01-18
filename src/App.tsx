import React from 'react';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import Profile from './components/Profile';
import './styles/App.css';


const App = () => (
  <Container className='profile'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="about">
      <Row>
        <Col sm={3} className='left-side'>
          <Profile />
          <hr />
          <Nav variant="pills" className="flex-column">
            <Nav.Link eventKey="about">About me</Nav.Link>
            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
            <Nav.Link eventKey="blog">Blog</Nav.Link>
            <Nav.Link eventKey="contact">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col sm={9} className='right-side'>
          <Tab.Content>
            <Tab.Pane eventKey="about">
              <div>About me</div>
            </Tab.Pane>
            <Tab.Pane eventKey="portfolio">
              <div>Portfolio</div>
            </Tab.Pane>
            <Tab.Pane eventKey="blog">
              <div>Blog</div>
            </Tab.Pane>
            <Tab.Pane eventKey="contact">
              <div>Contact</div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
);

export default App;
