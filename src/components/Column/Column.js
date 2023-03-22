import React from 'react';

import './Column.scss';

const Column = () => {
  return (
    <div className="Column">
      <header> Column Title </header>
      <ul className="TaskList">
        <li className="TaskItem"> 
          <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          alt="building construction"/>
          Title: Project Name
        </li>
        <li className="TaskItem"> Add tasks below </li>
        <li className="TaskItem"> Add tasks below </li>
        <li className="TaskItem"> Add tasks below </li>
        <li className="TaskItem"> Add tasks below </li>
      </ul>
      <footer>Add another task</footer>
  </div>
  )
}

export default Column;