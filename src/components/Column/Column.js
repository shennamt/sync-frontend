import React from 'react';

import './Column.scss';
import Task from 'components/Task/Task';

const Column = () => {
  return (
    <div className="Column">
      <header> Column Title </header>
      <ul className="TaskList">
        < Task />
        {/* <li className="TaskItem"> What are you working on? </li>
        <li className="TaskItem"> What are you working on? </li>
        <li className="TaskItem"> What are you working on? </li>
        <li className="TaskItem"> What are you working on? </li> */}
      </ul>
      <footer>Add another task</footer>
  </div>
  )
}

export default Column;