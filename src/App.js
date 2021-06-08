import React from "react";
import TaskBox from "./components/TaskBox";

import BeadsLogo from "./logos/beads.svg";
import MsitLogo from "./logos/msit.svg";
import ProvocationLogo from "./logos/provocation.svg"

function App() {
  let query = new URLSearchParams(window.location.search);
  const participantId = query.get("participantID");
  const studyId = query.get("studyID");

  return (
    <div style={{ backgroundColor: "#41464a" }}>
      <div className="container p-6" >
        <h1 className="title is-1 is-flex is-justify-content-center has-text-white mb-6 pb-4">Tasks</h1>
        <div className="columns">
          {/* Column 1 for tasks */}
          <div className="column is-half">
            {/* Boxes for tasks */}
            <TaskBox
              name="Beads"
              logo={BeadsLogo}
              link={`http://localhost:3000/?participantID=${participantId}&studyID=${studyId}`} 
            />
            <TaskBox
              name="Provocation"
              logo={ProvocationLogo}
              link={`http://localhost:3000/?participantID=${participantId}&studyID=${studyId}`}
            />
          </div>
          {/* Column 2 for tasks */}
          <div className="column is-half">
            {/* Boxes for tasks */}
            <TaskBox
              name="MSIT"
              logo={MsitLogo}
              link={`http://localhost:3000/?participantID=${participantId}&studyID=${studyId}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
