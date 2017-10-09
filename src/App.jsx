import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import IssueList from './IssueList.jsx'
import IssueEdit from './IssueEdit.jsx'

const contentNode = document.getElementById('contents')
const NoMatch = () => <p>Page Not Found</p>

const RoutedApp = () => (
  <HashRouter>
    <Switch>
      <Redirect exact from='/' to='/issues' />
      <Route exact path='/issues' component={IssueList} />
      <Route path='/issues/:id' component={IssueEdit} />
      <Route exact path='/issueEdit' component={IssueEdit} />
      <Route path='*' exact component={NoMatch} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<RoutedApp />, contentNode)

if (module.hot) {
  module.hot.accept()
}