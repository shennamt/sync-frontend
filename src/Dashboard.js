import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <nav className="NavBar App">
        App Nav
      </nav>

      <nav className="NavBar Board">
        Board Nav
      </nav>

      <div className="BoardColumns">
        <div className="Column">
          <header> Project One </header>
          <ul>
            <li> Title: Project Name </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
          </ul>
          <footer>Add another task</footer>
        </div>

        <div className="Column">
          <header> Project One </header>
          <ul>
            <li> Title: Project Name </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
            <li> Add tasks below </li>
          </ul>
          <footer>Add another task</footer>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard;