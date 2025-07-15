import React from 'react';

function Leaderboard({ leaderboard }) {
  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-15 col-lg-14">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(user => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Leaderboard;
