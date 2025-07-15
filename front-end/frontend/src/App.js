import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUsers, claimPoints, getLeaderboard } from './api';
import AddUserForm from './components/AddUserForm';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [claimedPoints, setClaimedPoints] = useState(null);

  const refreshUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const refreshLeaderboard = async () => {
    const res = await getLeaderboard();
    setLeaderboard(res.data);
  };

  useEffect(() => {
    refreshUsers();
    refreshLeaderboard();
  }, []);

  const handleClaim = async () => {
    if (!selectedUserId) return alert('Select a user first');
    const res = await claimPoints(selectedUserId);
    setClaimedPoints(res.data.randomPoints);
    refreshUsers();
    refreshLeaderboard();
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              handleClaim={handleClaim}
              claimedPoints={claimedPoints}
              leaderboard={leaderboard}
              refreshUsers={refreshUsers} // pass refreshUsers to Home
            />
          }
        />
        <Route
          path="/add-user"
          element={<AddUserForm refreshUsers={refreshUsers} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
