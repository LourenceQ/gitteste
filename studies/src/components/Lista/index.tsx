import React from "react";
import "./style.scss";

function Lista() {
  const tarefa = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "C#",
      tempo: "02:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      {/* <h2>Estudos do dia</h2> */}
      <ul>
        {tarefa.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
