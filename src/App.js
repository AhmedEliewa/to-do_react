import TODoList from "./component/ToDolist";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-lg-center m-4 ">
          <Col className="col-md-8 col-12 text-center">
            <TODoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
