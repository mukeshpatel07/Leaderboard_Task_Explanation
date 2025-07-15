import React from 'react';

function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="p-4 bg-light rounded shadow text-center">
            <h5 className="text-center mb-3 fw-bold">Select User</h5>
            <select
              id="userSelector"
              value={selectedUserId}
              onChange={e => setSelectedUserId(e.target.value)}
              className="form-select"
              required
            >
              <option value="">-- Select User --</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSelector;
