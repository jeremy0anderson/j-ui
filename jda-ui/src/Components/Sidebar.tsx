import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export {Sidebar}
