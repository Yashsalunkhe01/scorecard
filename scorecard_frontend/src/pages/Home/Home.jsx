import React from 'react';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '20px', flexGrow: 1 }}>
        <h1>Welcome to the Home Page!</h1>
        <p>This is your dashboard. Select an option from the sidebar to proceed.</p>
      </div>
    </div>
  );
};

export default Home;
