import React from "react";

import "./Dashboard.scss";

// Custom Components
import DashboardNav from "components/DashboardNav/DashboardNav";
// import NavBarBoard from "components/NavBarBoard/NavBarBoard";
// import BoardContent from "components/BoardContent/BoardContent";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardNav/>
      {/* <NavBarBoard /> */}
      {/* <BoardContent /> */}
    </div>
  );
};

export default Dashboard;
