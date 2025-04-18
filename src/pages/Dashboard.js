import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Welcome to Dashboard</h1>
        <p>This is your content area next to the sidebar.</p>
      </div>
    </div>
  );
}

export default Dashboard;
