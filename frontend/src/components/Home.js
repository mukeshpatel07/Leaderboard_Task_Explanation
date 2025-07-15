import React from 'react';
import Leaderboard from './Leaderboard';

function Home({
  users,
  selectedUserId,
  setSelectedUserId,
  handleClaim,
  claimedPoints,
  leaderboard,
  
}) {
  return (
    <div className='bg-pink min-vh-100'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          <div className="p-4 bg-light rounded shadow text-center">
            <h5 className="mb-3 fw-bold">Select User</h5>
            <select
              id="userSelector"
              value={selectedUserId}
              onChange={e => setSelectedUserId(e.target.value)}
              className="form-select mb-3"
              required
            >
              <option value="">-- Select User --</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>

            <button className="btn btn-primary w-100 mb-3" onClick={handleClaim}>
              Claim Points
            </button>

            {claimedPoints && (
              <p className="fw-bold text-success">
                Claimed: {claimedPoints} points
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container my-4">
        <h4 className="text-center mb-4">Top 3 Users</h4>
        <div className="row justify-content-center">
          {leaderboard.slice(0, 3).map((user, index) => (
            <div
              key={user.rank}
              className={`col-12 col-sm-4 mb-3 ${
                index === 0
                  ? 'order-2'
                  : index === 1
                  ? 'order-1'
                  : 'order-3'
              }`}
            >
              <div
                className="card text-center shadow"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className="card-body">
                  <img
                    src="https://cdn.vectorstock.com/i/500p/36/70/user-authentication-icon-profile-access-vector-54573670.jpg"
                    alt="Profile"
                    width="80"
                    height="80"
                    className="rounded-circle mb-3"
                  />
                  <h5 className="card-title fw-bold">Rank {user.rank}</h5>
                  <p className="card-text">{user.name}</p>
                  <p className="card-text">Points: {user.totalPoints}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default Home;
