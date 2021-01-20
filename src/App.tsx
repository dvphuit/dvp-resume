import React, { useState } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import Profile from './components/Profile';
import './styles/App.css';
import { FaUser, FaProjectDiagram, FaBloggerB, FaPaperPlane } from "react-icons/fa";
import Switch from './components/Switch';
import About from './screens/About';
import Portfolio from './screens/Portfolio';
import SendMail from './screens/SendMail';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className='vcard profile'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="about">
        <Row>
          <Col sm={2} className='left-side'>
            <div className='left-container'>
              <Profile />
              <hr />
              <Nav variant="pills" className="flex-column">
                <Nav.Link eventKey="about"><FaUser className='icon' />About me</Nav.Link>
                <Nav.Link eventKey="portfolio"><FaProjectDiagram className='icon' />Portfolio</Nav.Link>
                <Nav.Link eventKey="blog"><FaBloggerB className='icon' />Blog</Nav.Link>
                <Nav.Link eventKey="send-mail"><FaPaperPlane className='icon' />Contact</Nav.Link>
              </Nav>
              <hr />
              <Switch isOn={value} onColor="#EF476F" handleToggle={() => setValue(!value)} />
            </div>
          </Col>
          <Col sm={10} className='right-side'>
            <Tab.Content>
              <Tab.Pane eventKey="about">
                <About />
              </Tab.Pane>
              <Tab.Pane eventKey="portfolio">
                <Portfolio />
              </Tab.Pane>
              <Tab.Pane eventKey="blog">
                <div>Blog</div>
              </Tab.Pane>
              <Tab.Pane eventKey="send-mail">
                <SendMail />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default App;
