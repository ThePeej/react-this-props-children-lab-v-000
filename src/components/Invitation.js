// Code Invitation Component Here
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Invitation;