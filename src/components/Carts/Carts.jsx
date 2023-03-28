import {Card,Col,Row,NavLink} from 'react-bootstrap';
import img1 from "./pictures/truck.jpg";


function GridExample() {
  return (
    <div className='container' style={{margin:"60px"}}>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <NavLink variant="primary" style={{marginLeft:'75%'}}>Go somewhere</NavLink>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default GridExample;