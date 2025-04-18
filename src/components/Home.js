// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1>Welcome to the Home Page!</h1>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Home;
