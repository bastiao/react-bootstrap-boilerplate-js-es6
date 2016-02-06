/*
*	Author: Luís A. Bastião Silva <luis.kop@gmail.com>
*	===========================================================================
*/


import React from 'react';
import { Router, Route, Link } from 'react-router';


class MenuSidebar extends React.Component {

	render(){
		return(
      <div className="navbar-default sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
              <li className="sidebar-search">
              </li>
              <li>
                  <Link to="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
              </li>
              <li>
                  <Link to="/index"><i className="fa fa-table fa-fw"></i> Index</Link>
              </li>

          </ul>
      </div>
      </div>
		);
	}
}

export {MenuSidebar}
