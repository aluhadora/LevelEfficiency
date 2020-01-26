import React, { Component } from 'react';
import { setVisibilityFilter, setMembers } from '../../actions'
import AllLevels from './alllevels'

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setVisibilityFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllLevels)

export default Users