import React from 'react';
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardEmployees from './Pages/DashboardEmployees/DashboardEmployees';
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardContextProvider from './context/DashboardContext';

const App = () => {
  return (
    <DashboardContextProvider>
      <Router>
        <Sidebar/>
        <Route path='/' exact component={DashboardFinance} />
        <Route path='/dashboardEmployees' exact component={DashboardEmployees} />
      </Router>

    </DashboardContextProvider>
     
  );
};

export default App;