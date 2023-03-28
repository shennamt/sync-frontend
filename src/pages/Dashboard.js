import React from "react";

import "./Dashboard.scss";

// Custom Components
import DashboardNav from "components/DashboardNav/DashboardNav";
import BoardContent from "components/BoardContent/BoardContent";


const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardNav/>
      <BoardContent />
    </div>
  );
};

export default Dashboard;
