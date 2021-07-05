import React, { useState } from "react";
import './styles.css';

const RemoteButton = React.lazy(() => import("app1/Button"));

// Component
const SideBar = ({click}) => {
    return (
        <div className="sidebar">
            <div className="menu">
                <ul>
                    <li onClick={() => click(1)}>App 1</li>
                    <li onClick={() => click(2)}>App 2</li>
                </ul>
            </div>
        </div>
    );
}

// Main App
const App = () => {
  
  const [currentApp, setCurrentApp] = useState(0);

  const handleClick = (context) => {
    setCurrentApp(context)
  }

  const getContent = (index) => {
    console.log(index)
    switch(index) {
      case 1: return (
                <div className="center">
                  <React.Suspense fallback="Loading Button">
                    <RemoteButton />
                  </React.Suspense>
                </div>
              )
      case 2: return <div className="center">Hello</div>
      default: return <div className="center">Please select an App</div>
    }
  }

  return <div style={{display: 'flex'}}>    
    <SideBar click={handleClick} />
    <div style={{width: '70%', position: 'relative'}}>
      {getContent(currentApp)}
    </div>
  </div>
}

export default App;
