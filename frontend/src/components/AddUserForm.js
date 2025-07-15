import React, { useState } from 'react';
import { addUser } from '../api';

const AddUserForm = ({ refreshUsers }) => {
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(name);
    setName('');
    refreshUsers(); 
    setSuccessMessage('User added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div id="add-user-form" className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow">
            <h4 className="mb-3 text-center">Add New User</h4>
            {successMessage && (
              <div className="alert alert-success text-center" role="alert">
                {successMessage}
              </div>
            )}
            <div className="input-group">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
                placeholder="Enter user name"
                required
              />
              <button className="btn btn-success" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
