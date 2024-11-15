import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { deletejsonServer } from '../services/api';
import { editContextResponse } from '../contextapi/Contextapi';

function Home() {
  const [todos, setTodos] = useState([]);
  const { editResponse } = useContext(editContextResponse);
  const [deleteResponse, setDeleteResponse] = useState({});

  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:3000/Todos');
      setTodos(res.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, [deleteResponse, editResponse]);

  const handleDelete = async (id) => {
    try {
      const res = await deletejsonServer(id);
      console.log(res);
      setDeleteResponse(res.data);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="p-5">
      <Link to={'/add'} className="btn btn-success mb-2 shadow">
        Add Todo
      </Link>
      {todos.length > 0 ? (
        <div className="d-flex gap-2 justify-content-center align-items-center row">
          {todos.map((item) => (
            <Card key={item.id} className="col-12">
              <Card.Body>
                <Card.Title className="mb-3">{item.title}</Card.Title>
                <h6>Status: {item.completed ? 'Completed' : 'Not Completed'}</h6>
                <div className="justify-content-between d-flex">
                  <Edit data={item} />
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h3>No Todos available</h3>
      )}
    </div>
  );
}

export default Home;
