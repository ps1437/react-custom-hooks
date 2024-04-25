import React, { useState } from 'react';
import './App.css';
import CodePreview from './components/CodePreview';
import UseDebounceSection from './components/sections/UseDebounceSection';
import UseFetchSection from './components/sections/UseFetchSection';
import UseOfflineSection from './components/sections/UseOfflineSection';
import UseTimerSection from './components/sections/UseTimerSection';
import UseWindowResizeSection from './components/sections/UseWindowResizeSection';

function App() {
  const [selectedHook, setSelectedHook] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [component, setComponent] = useState();

  const handleClick = (hookCode) => {
    setSelectedHook(hookCode);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div>
      <h1 className="main-header">Hook-Up-Hooks</h1>
      <div className="app-container">
        <UseFetchSection renderComponent={setComponent} handleClick={handleClick} />
        <UseWindowResizeSection renderComponent={setComponent} handleClick={handleClick} />
        <UseTimerSection renderComponent={setComponent} handleClick={handleClick} />
        <UseDebounceSection renderComponent={setComponent} handleClick={handleClick} />
        <UseOfflineSection renderComponent={setComponent} handleClick={handleClick} />
      </div>

      {showPreview && <CodePreview
        renderComponent={component}
        code={selectedHook} onClose={handleClosePreview} />}

    </div>
  );
}


export default App;
