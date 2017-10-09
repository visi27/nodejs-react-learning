import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class IssueEdit extends React.Component {
  render () {
    return (
      <div>
        <p>This is a placeholder for editing issue: {this.props.match.params.id}</p>
        <Link to='/issues'>Back To Issues List</Link>
      </div>
    )
  }
}

IssueEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })

}
