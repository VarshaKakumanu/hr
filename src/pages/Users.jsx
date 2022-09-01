import { Button, Container , Card ,  Row ,Col} from "react-bootstrap";
import image from "../logo.svg";

function BasicExample() {
  return (
    <Container className="justify-content-center">
      <Row>
      <Col>
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={image} />
               <Card.Body>
                <Card.Title>Card Title</Card.Title>
                   <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
          </Card>
       </Col>
    </Row>
    <br />
    <Row>
      <Col md={{ span: 12, offset: 6 }}>{
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={image} />
               <Card.Body>
                <Card.Title>Card Title</Card.Title>
                   <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
          </Card>}
       </Col>
    </Row>
    </Container>
  );
}

export default BasicExample;

