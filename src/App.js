import React, { useState } from "react";
import Game from "./components/Game";
import readme from "./readme.md"; // Import the readme.md file

const App = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const showHelp = () => {
    setIsHelpOpen(true);
  };

  const hideHelp = () => {
    setIsHelpOpen(false);
  };

  return (
    <div className="app">
      <Game showHelp={showHelp} />
      {isHelpOpen && (
        <div className="help-modal">
          <div className="help-content">
            <button className="close-button" onClick={hideHelp}>
              Close
            </button>
            <div dangerouslySetInnerHTML={{ __html: readme }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
