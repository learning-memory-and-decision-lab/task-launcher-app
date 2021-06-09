import React from "react";
import TaskBox from "./components/TaskBox";

import BeadsLogo from "./logos/beads.svg";
import MsitLogo from "./logos/msit.svg";
import ProvocationLogo from "./logos/provocation.svg"



function App() {
  let [, params] = window.location.href.split('/?')

  // append search paraments to a link
  const appendToLink = (link) =>{
    return `${link}/?${params}`
  }
  return (
    <div style={{ backgroundColor: "#41464a" }}>
      <div className="container p-6" >
        
        <h1 className="title is-1 is-flex is-justify-content-center has-text-white mb-6 pb-4">Tasks</h1>
        <div style = {{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
            <TaskBox
              name="Beads"
              logo={BeadsLogo}
              link={appendToLink('http://localhost:3000')} 
            />
            <TaskBox
              name="MSIT"
              logo={MsitLogo}
              link={appendToLink('http://localhost:3000')}
            />
            <TaskBox
              name="Provocation"
              logo={ProvocationLogo}
              link={appendToLink('http://localhost:3000')}
            />
            
        </div>
      </div>
    </div>
  );
}

export default App;
