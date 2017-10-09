import React from 'react'
import { Link } from 'react-router-dom'
import QueryString from 'query-string'

export default class IssueFilter extends React.Component {
  render () {
    const Separator = () => <span> | </span>
    return (
      <div>
        <Link to='/issues'> All Issues </Link>
        <Separator />
        <Link to={{pathname: '/issues', search: QueryString.stringify({status: 'Open'})}}> Open Issues </Link>
        <Separator />
        <Link to={{pathname: '/issues', search: QueryString.stringify({status: 'Assigned'})}}> Assigned Issues </Link>
      </div>
    )
  }
}
