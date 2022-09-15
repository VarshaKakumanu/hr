import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Messages() {
  return (
    <>
    <Row style={{textAlign:'center',color:'#2a75b3'}}>
      <h1 > Available Traings</h1>
    </Row>
      <Row style={{ display: "flex", width: "97%" }} className="m-4">
      <Col xl sm lg={4} style={{width: "500px"}}>
        <Card className="shadow p-2">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Webdevelopment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Register Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xl sm lg={4}>
        <Card  className="shadow p-2">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Webdevelopment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Register Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xl sm lg={4}>
        <Card  className="shadow p-2" >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Webdevelopment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Register Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
}

export default Messages;
