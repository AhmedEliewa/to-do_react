import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ShowTasks from "./ShowTasks";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "./storeData/storeInLocalStorage";

function TODoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [mood, setMood] = useState("create");

  //check localStorage to see if there are any tasks
  useEffect(() => {
    const storedTasks = getItemFromLocalStorage("tasks");
    setTasks(storedTasks);
  }, []);

  //store tasks in localStorage
  useEffect(() => {
    setItemInLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      if (mood === "create") {
        setTasks([...tasks, taskInput]);
      } else {
        const updateTask = tasks.map((task, index) =>
          index === idItem ? taskInput : task
        );
        setTasks(updateTask);
      }
      setTaskInput("");
      setMood("create");
      setIdItem(null);
    }
  };
  return (
    <Container>
      <Row className="justify-content-lg-center m-4 ">
        <Col className="col-md-8 col-12 text-center">
          <h1>Todo List</h1>
          <Form onSubmit={handleAddTask}>
            <FloatingLabel controlId="floatingTextarea2" label="Add Your Task">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{
                  height: "100px",
                  resize: "none",
                  border: "2px solid green",
                }}
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
            </FloatingLabel>
            <Button
              variant="outline-success"
              type="submit"
              className="mt-3 text-capitalize"
            >
              {mood === "create" ? "add Task" : "update task"}
            </Button>
          </Form>
          <ShowTasks
            tasks={tasks}
            setTasks={setTasks}
            setTaskInput={setTaskInput}
            setIdItem={setIdItem}
            setMood={setMood}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TODoList;
