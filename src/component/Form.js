import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";
function TODoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState("create");
  const [idItem, setIdItem] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (mood === "create") {
      setTasks([...tasks, taskInput]);
    } else {
      const updatedTask = tasks.map((task, index) => {
        if (index === idItem) {
          return taskInput;
        } else {
          return task;
        }
      });
      setTasks(updatedTask);
      setMood("create");
      setIdItem(null);
    }
    setTaskInput("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, id) => id !== index));
  };

  const handleUpdate = (index) => {
    const updatedTask = [...tasks][index];
    setTaskInput(updatedTask);
    setIdItem(index);
    setMood("update");
    console.log(updatedTask);
  };

  return (
    <Container>
      <Row className="justify-content-md-center m-4">
        <Col className="col-md-6 col-12 text-center">
          <h2 className=" mb-4">Enter Your Task</h2>
          <Form onSubmit={handleAddTask}>
            <Form.Group controlId="formDescription">
              <Form.Control
                style={{
                  height: "100px",
                  resize: "none",
                  border: "2px solid green",
                }}
                as="textarea"
                rows={3}
                value={taskInput}
                name="description"
                onChange={(e) => {
                  setTaskInput(e.target.value);
                }}
              />
            </Form.Group>

            <Button type="submit" className="mt-3 w-75 btn-primary">
              {mood === "create" ? "Add Task" : "Update Task"}
            </Button>
          </Form>

          <ul className="list-group list-group-flush w-100 break-word ">
            {tasks.map((item, index) => (
              <li
                key={index}
                className="bg-dark list-group-item d-flex justify-content-between align-items-center mt-3 task-item"
              >
                <span className="task-text text-light text-start">{item}</span>
                <div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="ms-2"
                    onClick={() => handleUpdate(index)}
                  >
                    update
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default TODoList;
