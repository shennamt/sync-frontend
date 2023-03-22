import React from 'react';

import './Task.scss';

const Task = () => {
  return (
    <li className="TaskItem"> 
      <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
      alt="building construction"/>
      Title: Project Name
    </li>
  )
}

export default Task;