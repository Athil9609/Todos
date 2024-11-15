import axios from 'axios';
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updatejsonServer, updatePlaceholder } from '../services/api';
import { editContextResponse } from '../contextapi/Contextapi';

function Edit({ data }) {
  const { editResponse, seteditResponse } = useContext(editContextResponse);
  const [Todo, SetTodo] = useState(data);

  const handleUpdate = async () => {
    const res = await updatePlaceholder(data.id, Todo);
    console.log(res);

    const res2 = await updatejsonServer(data.id, Todo);
    console.log(res2);

    if (res2.status === 200) {
      handleClose();
    }
    seteditResponse(res2);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        Update
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control mb-3"
            defaultValue={data.title}
            onChange={(e) => {
              SetTodo({ ...Todo, title: e.target.value });
            }}
            placeholder="Enter Title"
          />
          <label htmlFor="op">
            Status:
            <select
              id="op"
              className="form-control"
              defaultValue={data.completed ? 'true' : 'false'}
              onChange={(e) => {
                // Convert string to boolean
                SetTodo({ ...Todo, completed: e.target.value === 'true' });
              }}
            >
              <option value="true">Completed</option>
              <option value="false">Not Completed</option>
            </select>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
