import React from 'react';

import './Dashboard.scss'

// Custom Components
import NavBarApp from 'components/NavBarApp/NavBarApp';
import NavBarBoard from 'components/NavBarBoard/NavBarBoard';
import BoardContent from 'components/BoardContent/BoardContent';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      < NavBarApp />
      < NavBarBoard />
      < BoardContent />
    </div>
  )
}

export default Dashboard;