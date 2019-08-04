import React from 'react';
import './animate.css';
import './App.css';
import LogEmotion from './LogEmotion';
import Dashbord from './Dashboard';
import Switcher from './Switcher';

function App() {
  return (
      <Switcher tabs={[
        {
          name: "Home",
          element: <LogEmotion/>
        },
        {
          name: "Logs",
          element: <Dashbord/> 
        }
      ]
      } />
  );
}

export default App;
