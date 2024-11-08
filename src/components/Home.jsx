import React, { useState } from 'react';
import Splash from './ui/Splash.jsx';
import Form from './ui/Form.jsx';
import Draft from './Draft.jsx'; // Make sure this file exists

const Home = () => {
  const [isDraftStarted, setIsDraftStarted] = useState(false);
  const [userName, setUserName] = useState('');

  const handleStartDraft = (name) => {
    setUserName(name);
    setIsDraftStarted(true);
  };

  return (
    <div className="home">
      {isDraftStarted ? (
        <Draft userName={userName} />
      ) : (
        <>
          <Splash />
          <Form onStartDraft={handleStartDraft} />
        </>
      )}
    </div>
  );
};

export default Home;