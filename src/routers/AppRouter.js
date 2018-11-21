import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoungPage from '../components/NotFoungPage';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
   <Router history={history}>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoungPage} />
         </Switch>
      </div>
   </Router>
);

export default AppRouter;
