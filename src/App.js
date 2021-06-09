import React from "react";
import TaskBox from "./components/TaskBox";

const tasks = [
  {
    name: "Beads",
    logoImport: import("./logos/beads.svg"),
    link: "https://borton-task-beads.web.app",
  },
  {
    name: "MSIT",
    logoImport: import("./logos/msit.svg"),
    link: "https://borton-task-msit.web.app",
  },
  {
    name: "Provocation",
    logoImport: import("./logos/provocation.svg"),
    link: "https://borton-task-provocation.web.app",
  },
];

function App() {
  let [, params] = window.location.href.split("/?");

  // append search paraments to a link
  const appendToLink = (link) => {
    return `${link}/?${params}`;
  };
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
