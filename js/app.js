/*
*	Author: Luís A. Bastião Silva <luis.kop@gmail.com>
*	===========================================================================
*/

import React from 'react';

/*
import SearchableTable from './components/SearchableTable';
import {data} from './components/data';

// Filterable CheatSheet Component
React.render(<SearchableTable data={data}/>, document.getElementById('searchableTable'));
*/
import { Router, Route, Link } from 'react-router';
import data from './data';

import {MenuSidebar} from './components/menu'


import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Home from './components/Home';
const __DEVTOOLS__ = true;
const __DEV__ = true;

import {renderDevTools} from './utils/devTools';



const store = configureStore();


var Index = React.createClass({
  render() {
    return (
      <div>
        <h1>Index</h1>
        <p>
          Routes can have multiple components, so that all portions of your UI
          can participate in the routing.
        </p>
        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <Home />
        </Provider>

      </div>
    );
  }
});


var Dashboard = React.createClass({
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          Routes can have multiple components, so that all portions of your UI
          can participate in the routing.
        </p>
      </div>
    );
  }
});




var App = React.createClass({
  render() {
    var { children } = this.props;

    return (
      <div>
      <div id="wrapper">
          <nav className="navbar navbar-default navbar-static-top" role="navigation" bsStyle="margin-bottom: 0">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="index.html">Boilerplate React.JS ES6 Bootstrap</a>
              </div>
              <ul className="nav navbar-top-links navbar-right">
                  <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-envelope fa-fw"></i>  <i className="fa fa-caret-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-messages">
                          <li>
                              <a href="#">
                                  <div>
                                      <strong>John Smith</strong>
                                      <span className="pull-right text-muted">
                                          <em>Yesterday</em>
                                      </span>
                                  </div>
                                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <strong>John Smith</strong>
                                      <span className="pull-right text-muted">
                                          <em>Yesterday</em>
                                      </span>
                                  </div>
                                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <strong>John Smith</strong>
                                      <span className="pull-right text-muted">
                                          <em>Yesterday</em>
                                      </span>
                                  </div>
                                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a className="text-center" href="#">
                                  <strong>Read All Messages</strong>
                                  <i className="fa fa-angle-right"></i>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-tasks fa-fw"></i>  <i className="fa fa-caret-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-tasks">
                          <li>
                              <a href="#">
                                  <div>
                                      <p>
                                          <strong>Task 1</strong>
                                          <span className="pull-right text-muted">40% Complete</span>
                                      </p>
                                      <div className="progress progress-striped active">
                                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" bsStyle="width: 40%">
                                              <span className="sr-only">40% Complete (success)</span>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <p>
                                          <strong>Task 2</strong>
                                          <span className="pull-right text-muted">20% Complete</span>
                                      </p>
                                      <div className="progress progress-striped active">
                                          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" bsStyle="width: 20%">
                                              <span className="sr-only">20% Complete</span>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <p>
                                          <strong>Task 3</strong>
                                          <span className="pull-right text-muted">60% Complete</span>
                                      </p>
                                      <div className="progress progress-striped active">
                                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" bsStyle="width: 60%">
                                              <span className="sr-only">60% Complete (warning)</span>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <p>
                                          <strong>Task 4</strong>
                                          <span className="pull-right text-muted">80% Complete</span>
                                      </p>
                                      <div className="progress progress-striped active">
                                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" bsStyle="width: 80%">
                                              <span className="sr-only">80% Complete (danger)</span>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a className="text-center" href="#">
                                  <strong>See All Tasks</strong>
                                  <i className="fa fa-angle-right"></i>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-bell fa-fw"></i>  <i className="fa fa-caret-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-alerts">
                          <li>
                              <a href="#">
                                  <div>
                                      <i className="fa fa-comment fa-fw"></i> New Comment
                                      <span className="pull-right text-muted small">4 minutes ago</span>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                      <span className="pull-right text-muted small">12 minutes ago</span>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <i className="fa fa-envelope fa-fw"></i> Message Sent
                                      <span className="pull-right text-muted small">4 minutes ago</span>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <i className="fa fa-tasks fa-fw"></i> New Task
                                      <span className="pull-right text-muted small">4 minutes ago</span>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a href="#">
                                  <div>
                                      <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                      <span className="pull-right text-muted small">4 minutes ago</span>
                                  </div>
                              </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                              <a className="text-center" href="#">
                                  <strong>See All Alerts</strong>
                                  <i className="fa fa-angle-right"></i>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i className="fa fa-user fa-fw"></i>  <i className="fa fa-caret-down"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-user">
                          <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                          </li>
                          <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                          </li>
                          <li className="divider"></li>
                          <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                          </li>
                      </ul>
                  </li>
              </ul>
              <MenuSidebar>
              </MenuSidebar>

          </nav>

          <div id="page-wrapper">
            {this.props.children}
          </div>

      </div>


        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>

    );
  }
});

console.log("Route");

React.render((
  <Router>
    <Route path="/" component={App}>
     <Route path="index" component={Index} />
      <Route path="dashboard" component={Dashboard} />

    </Route>
  </Router>
), document.getElementById('main'));
