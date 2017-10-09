import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'

import IssueList from './IssueList.jsx'
import IssueEdit from './IssueEdit.jsx'

const contentNode = document.getElementById('contents')
const NoMatch = () => <p>Page Not Found</p>

const App = (props) => (
  <div>
    <div className='header'>
      <h1>Issue Tracker</h1>
    </div>

    <div className='contents'>
      {props.children}
    </div>
    <div className='footer'>
      Full source code available at this <a href='https://github.com/vasansr/pro-mern-stack'>GitHub repository</a>.
    </div>
  </div>
)

const RoutedApp = () => (
  <HashRouter>
    <Switch>
      <Redirect exact from='/' to='/issues' />
      <App>
        <Route exact path='/issues' component={withRouter(IssueList)} />
        <Route path='/issues/:id' component={IssueEdit} />
        <Route path='*' exact component={NoMatch} />
      </App>
    </Switch>
  </HashRouter>
)

ReactDOM.render(<RoutedApp />, contentNode)

if (module.hot) {
  module.hot.accept()
}
