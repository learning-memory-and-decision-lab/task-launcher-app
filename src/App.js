import React from "react";
import TaskBox from "./components/TaskBox";

const tasks = [
  {
    name: "Pilot",
    logoImport: import("./logos/learning-memory-and-decision-lab.png"),
    link: "https://nassar-honeycomb-pilot.web.app/",
  }
];

function App() {
  let [, params] = window.location.href.split("/?");

  // append search parameters to a link to pass through to the task
  const appendToLink = (link) => params ? `${link}/?${params}` : link;
  return (
    <div style={{ backgroundColor: "#41464a" }}>
      <div className="container p-6" style={{ maxWidth: "1000px" }}>
        <h1 className="title is-1 is-flex is-justify-content-center has-text-white mb-6 pb-4">
          Tasks
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 2fr))" }}>
          {tasks.map((task) => {
            return (
              <TaskBox
                name={task.name}
                key={task.name}
                logoImport={task.logoImport}
                link={appendToLink(task.link)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
