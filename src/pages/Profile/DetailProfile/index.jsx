import React from 'react';
import { Container, Row, Col, Nav, Tab, Image, Button } from 'react-bootstrap';

const RecipeCard = () => {
  return (
    <Container className="my-5">
      {/* ... */}
    </Container>
  );
};

const TabsSection = () => {
  return (
    <Container>
      <Nav fill variant="tabs" defaultActiveKey="#recipes">
        <Nav.Item>
          <Nav.Link href="#recipes">Recipes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#bookmark">Bookmarked</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#like">Liked</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

const TabContent = () => {
  return (
    <Tab.Content>
      {/* ... */}
    </Tab.Content>
  );
};

const Footer = () => {
  return (
    <footer className="container-fluid">
      <Row>
        <Col md={12}>
          <div className="footer-content text-center">
            <h1 className="fw-bold">Eat, Cook, Repeat</h1>
            <p>Share Your Best Recipe By Uploading Here!</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

const DetailProfile = () => {
  return (
    <div>
      <RecipeCard />
      <TabsSection />
      <TabContent />
      <Footer />
    </div>
  );
};

export default DetailProfile;
