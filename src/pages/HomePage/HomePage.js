import React from "react";

import './HomePage.css'

// Custom Components
import DashboardNav from "components/DashboardNav/DashboardNav";
import BoardContent from "components/BoardContent/BoardContent";


const HomePage = () => {
  return (
    <div className="Dashboard">
      <DashboardNav/>
      <BoardContent />
    </div>
  );
};

export default HomePage;