import React, { useState, useEffect } from "react";
import axios from "axios";

const Crud = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8080/api/data");
    setData(result.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/data", formData);
    fetchData();
    setFormData({
      name: "",
      email: "",
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/data/${id}`);
    fetchData();
  };

  const handleUpdate = async (id, newData) => {
    await axios.put(`http://localhost:8080/api/data/${id}`, newData);
    fetchData();
  };

  return (
    <div>
      <h1>CRUD Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleUpdate(item.id, { name: "New Name", email: "newemail@example.com" })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
