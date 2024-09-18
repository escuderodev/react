import React from "react";

export function List() {
  const tasks = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "02:30:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3> {item.tarefa} </h3>
            <span> {item.tempo} </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
